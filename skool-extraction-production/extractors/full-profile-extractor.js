#!/usr/bin/env node

/**
 * Full Profile Extractor for Skool Communities
 * Extracts member profiles and community information
 */

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

class SkoolExtractor {
    constructor() {
        this.browser = null;
        this.context = null;
        this.results = [];
    }

    async init() {
        console.log('Initializing browser...');
        this.browser = await chromium.launch({
            headless: true,
            args: ['--disable-blink-features=AutomationControlled']
        });
        this.context = await this.browser.newContext({
            viewport: { width: 1920, height: 1080 },
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        });
    }

    async extractCommunity(url) {
        console.log(`Extracting community: ${url}`);
        const page = await this.context.newPage();
        
        try {
            await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
            await page.waitForTimeout(2000);

            // Extract basic community info
            const communityData = await page.evaluate(() => {
                const getTextContent = (selector) => {
                    const element = document.querySelector(selector);
                    return element ? element.textContent.trim() : '';
                };

                return {
                    name: getTextContent('h1') || document.title,
                    description: getTextContent('[class*="description"]'),
                    members: getTextContent('[class*="member"]'),
                    url: window.location.href,
                    extractedAt: new Date().toISOString()
                };
            });

            this.results.push(communityData);
            console.log(`Extracted: ${communityData.name}`);
            
            return communityData;
        } catch (error) {
            console.error(`Error extracting ${url}:`, error.message);
            return null;
        } finally {
            await page.close();
        }
    }

    async extractFromFile(filePath, limit = null) {
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        const urls = fs.readFileSync(filePath, 'utf8')
            .split('\n')
            .map(line => line.trim())
            .filter(line => line && line.startsWith('http'));

        const urlsToProcess = limit ? urls.slice(0, limit) : urls;
        console.log(`Processing ${urlsToProcess.length} URLs...`);

        for (const url of urlsToProcess) {
            await this.extractCommunity(url);
            // Add delay to be respectful
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }

    async saveResults() {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const outputDir = path.join(__dirname, '..', 'data', 'profiles');
        
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const outputFile = path.join(outputDir, `extraction-${timestamp}.json`);
        fs.writeFileSync(outputFile, JSON.stringify(this.results, null, 2));
        console.log(`Results saved to: ${outputFile}`);
        return outputFile;
    }

    async cleanup() {
        if (this.browser) {
            await this.browser.close();
        }
    }
}

async function main() {
    const extractor = new SkoolExtractor();
    
    try {
        await extractor.init();

        // Parse command line arguments
        const args = process.argv.slice(2);
        const fileIndex = args.indexOf('--file');
        const limitIndex = args.indexOf('--limit');
        const communityIndex = args.indexOf('--communities');

        if (fileIndex !== -1 && args[fileIndex + 1]) {
            const filePath = args[fileIndex + 1];
            const limit = limitIndex !== -1 ? parseInt(args[limitIndex + 1]) : null;
            await extractor.extractFromFile(filePath, limit);
        } else if (communityIndex !== -1 && args[communityIndex + 1]) {
            const url = args[communityIndex + 1];
            await extractor.extractCommunity(url);
        } else {
            console.log('Usage:');
            console.log('  node full-profile-extractor.js --file <path> [--limit N]');
            console.log('  node full-profile-extractor.js --communities <url> [--limit N]');
            process.exit(1);
        }

        await extractor.saveResults();
        console.log(`Extraction complete! Extracted ${extractor.results.length} communities.`);
    } catch (error) {
        console.error('Extraction error:', error);
        process.exit(1);
    } finally {
        await extractor.cleanup();
    }
}

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = { SkoolExtractor };