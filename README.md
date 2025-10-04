# Echo Skool Waitlist - Skool Community CRM System

A Next.js application for managing Skool community leads with AI-powered support capabilities.

## Features

- **Modern Landing Page**: Next.js 15+ with Tailwind CSS and dark mode
- **AI Chat Support**: Demo chat API for community support interactions
- **Lead Capture**: Pilot program form submission system
- **Web Scraping**: Playwright-based Skool community extraction
- **Responsive Design**: Mobile-first interface with shadcn/ui components

## Tech Stack

- **Framework**: Next.js 15.5.3
- **Styling**: Tailwind CSS 3.4+ with custom design system
- **UI Components**: Radix UI + shadcn/ui
- **Scraping**: Playwright for automated data extraction
- **Language**: TypeScript 5.9+
- **Animation**: Smooth interactions and transitions

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
echo-skool-waitlist/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── chat/         # AI chat endpoint
│   │   └── submit-pilot-form/  # Form submission
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── echo-skool-logo.tsx
│   └── theme-provider.tsx
├── lib/                   # Utility functions
│   └── utils.ts          # Shared utilities
└── skool-extraction-production/  # Scraping system
    ├── extractors/       # Extraction scripts
    ├── config/           # Configuration
    └── data/            # Output data
```

## API Endpoints

### POST `/api/chat`
AI-powered chat endpoint for community support
- Request: `{ message: string, agentType?: string }`
- Response: `{ message: string, agentType: string, timestamp: string }`

### POST `/api/submit-pilot-form`
Pilot program application submission
- Request: Form data with community details
- Response: `{ success: boolean, message: string }`

## Web Scraping

The `skool-extraction-production` directory contains scripts for extracting Skool community data:

```bash
cd skool-extraction-production

# Install Playwright
npm install

# Extract tech communities (example)
node extract-tech-production.js --limit 5

# Extract from file
node extractors/full-profile-extractor.js --file data/urls.txt

# Extract single community
node extractors/full-profile-extractor.js --communities "https://www.skool.com/example"
```

## Configuration

### Environment Variables
Create a `.env.local` file for:
```
# Optional - for production AI integration
ANTHROPIC_API_KEY=your_key_here

# Optional - for webhook integration
N8N_WEBHOOK_URL=your_webhook_url
```

### Tailwind Configuration
Custom Skool brand colors are integrated:
- **Dark Blue**: `#3B5998`
- **Coral Red**: `#E85449`
- **Gold Yellow**: `#F5B800`
- **Light Cyan**: `#4FC3F7`
- **Salmon**: `#FF8A80`

## Development

```bash
# Run linter
npm run lint

# Type checking (if configured)
npm run typecheck

# Run in development with hot reload
npm run dev
```

## Deployment

Deploy to Vercel:
```bash
npm run build
vercel --prod
```

Or deploy to any platform supporting Next.js.

## Current Status

This is a functional prototype with:
- ✅ Working landing page with countdown timer
- ✅ Demo API endpoints for chat and form submission
- ✅ Basic web scraping capability
- ✅ Responsive design with dark mode

## Future Enhancements

- [ ] Connect to real AI service (Anthropic/OpenAI)
- [ ] Database integration for lead storage
- [ ] Enhanced scraping with profile extraction
- [ ] Email automation integration
- [ ] Analytics and tracking

## License

MIT License - see LICENSE file for details.

---

Part of the Echo AI Platform - adaptive intelligence for businesses.