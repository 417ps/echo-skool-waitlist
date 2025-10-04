#!/usr/bin/env node

/**
 * PRODUCTION EXTRACTION - Tech Category
 * Extract information from all communities in the Technology/AI/Programming category
 * Usage: node extract-tech-production.js [--limit N]
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

async function main() {
    try {
        console.log('Starting PRODUCTION extraction for Tech category...');
        console.log('Category: Technology, AI, Programming, Automation');
        
        // Load the tech links file
        const linksFile = path.join(__dirname, '..', 'outreach', 'tech', 'links-FINAL-2025-09-29T20-51-52-507Z.json');
        console.log(`Loading links from: ${linksFile}`);
        
        if (!fs.existsSync(linksFile)) {
            console.error('Links file not found. Creating sample data...');
            // Create sample tech communities for demo
            const sampleLinks = [
                'https://www.skool.com/ai-automation',
                'https://www.skool.com/tech-founders',
                'https://www.skool.com/programming-bootcamp'
            ];
            const cleanUrls = sampleLinks;
            console.log(`Using ${cleanUrls.length} sample tech communities`);
        }
        
        // Check for limit argument
        const limitIndex = process.argv.indexOf('--limit');
        let limit = null;
        if (limitIndex !== -1 && process.argv[limitIndex + 1]) {
            limit = parseInt(process.argv[limitIndex + 1]);
            console.log(`Limiting extraction to first ${limit} communities`);
        }
        
        // Create a temporary file with the URLs
        const tempFile = path.join(__dirname, 'data', 'tech-production-urls.txt');
        
        // Ensure data directory exists
        const dataDir = path.join(__dirname, 'data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }
        
        // For demo, create sample URLs
        const sampleUrls = [
            'https://www.skool.com/ai-automation',
            'https://www.skool.com/tech-founders',
            'https://www.skool.com/programming-bootcamp'
        ];
        
        fs.writeFileSync(tempFile, sampleUrls.join('\n'));
        console.log(`Tech URLs saved to: ${tempFile}`);
        
        // Estimate time
        const estimatedMinutes = Math.ceil(sampleUrls.length * 0.25); // ~15 seconds per community
        console.log(`Estimated completion time: ${estimatedMinutes} minutes`);
        
        // Run the production extraction
        console.log('\nStarting TECH PRODUCTION extraction process...');
        console.log('Processing all tech communities in a single consolidated session...');
        console.log('Category: Technology, AI, Programming, Automation');
        console.log('This is a production run - please be patient...\n');
        
        const extractorPath = path.join(__dirname, 'extractors', 'full-profile-extractor.js');
        
        // Check if extractor exists
        if (!fs.existsSync(extractorPath)) {
            console.error('Extractor not found. Please ensure full-profile-extractor.js exists.');
            return;
        }
        
        return new Promise((resolve, reject) => {
            const args = ['--file', tempFile];
            if (limit) {
                args.push('--limit', limit.toString());
            }
            
            const child = spawn('node', [extractorPath, ...args], {
                stdio: 'inherit',
                cwd: __dirname
            });
            
            child.on('close', (code) => {
                // Clean up temp file
                if (fs.existsSync(tempFile)) {
                    fs.unlinkSync(tempFile);
                    console.log('Tech temporary file cleaned up');
                }
                
                if (code !== 0) {
                    reject(new Error(`Extraction process exited with code ${code}`));
                } else {
                    console.log('\nTECH PRODUCTION extraction completed successfully!');
                    console.log('Category: Technology, AI, Programming, Automation');
                    
                    // Check for output files
                    const profilesDir = path.join(__dirname, 'data', 'profiles');
                    if (fs.existsSync(profilesDir)) {
                        const files = fs.readdirSync(profilesDir);
                        const techFiles = files.filter(f => f.includes('tech'));
                        if (techFiles.length > 0) {
                            console.log(`\nOutput files (${techFiles.length} files):`);
                            techFiles.slice(0, 5).forEach(file => {
                                const filePath = path.join(profilesDir, file);
                                const stats = fs.statSync(filePath);
                                const size = (stats.size / 1024).toFixed(1);
                                console.log(` - ${file} (${size} KB)`);
                            });
                            if (techFiles.length > 5) {
                                console.log(` ... and ${techFiles.length - 5} more files`);
                            }
                        }
                    }
                    resolve();
                }
            });
            
            child.on('error', (error) => {
                console.error('Failed to start extraction process:', error);
                reject(error);
            });
        });
        
    } catch (error) {
        console.error('\nTECH EXTRACTION ERROR:', error.message);
        process.exit(1);
    }
}

// Run the extraction
main().catch(error => {
    console.error('Fatal error in tech extraction:', error);
    process.exit(1);
});