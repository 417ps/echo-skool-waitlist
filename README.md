# Echo Skool Waitlist - Skool Community CRM System

A Next.js application for managing Skool community CRM and waitlist functionality.

## Features

- **Modern Landing Page**: Built with Next.js 15+ and Tailwind CSS
- **Skool Integration**: Extract leads from Skool communities  
- **AI-Powered Support**: Echo AI mentor for community management
- **Web Scraping**: Automated data extraction from Skool platforms
- **Responsive Design**: Mobile-first responsive interface
- **Dark Mode**: Built-in dark theme support

## Tech Stack

- **Framework**: Next.js 15.5.3
- **Styling**: Tailwind CSS 3.4+ with custom design system
- **UI Components**: Radix UI + shadcn/ui
- **Scraping**: Puppeteer 24.22.3
- **Language**: TypeScript 5.9+
- **Animation**: Motion 12.23+ for smooth interactions

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

## Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint

# Web Scraping
npm run scrape          # Extract all English communities
npm run scrape:tech     # Extract tech communities
npm run scrape:health   # Extract health communities  
npm run scrape:money    # Extract money/business communities

# Setup
npm run install-playwright  # Install Playwright browsers
npm run deploy              # Build and deploy to Vercel
```

## Project Structure

```
echo-skool-waitlist/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── echo-skool-logo.tsx
│   └── theme-provider.tsx
├── lib/                   # Utility functions
│   └── utils.ts          # Shared utilities
└── skool-extraction-production/  # Scraping scripts
```

## Configuration

The app uses the following configuration files:

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS with custom Skool brand colors
- `tsconfig.json` - TypeScript configuration  
- `components.json` - shadcn/ui configuration

## Skool Brand Integration

The design incorporates authentic Skool brand colors:

- **Dark Blue**: `#3B5998` (from 's')
- **Coral Red**: `#E85449` (from 'k') 
- **Gold Yellow**: `#F5B800` (from first 'o')
- **Light Cyan**: `#4FC3F7` (from second 'o')
- **Salmon**: `#FF8A80` (from 'l')

## Development

This project follows modern Next.js 15+ patterns:

- **App Router**: Uses the new app directory structure
- **Server Components**: Optimized for performance
- **TypeScript**: Fully typed for better DX
- **Responsive Design**: Mobile-first approach

## Deployment

Deploy easily to Vercel:

```bash
npm run deploy
```

Or deploy to any platform that supports Next.js applications.

## License

MIT License - see LICENSE file for details.

---

## Echo AI Platform

This is part of the larger Echo AI Platform - adaptive intelligence for businesses.

**Transform your Skool community with AI-powered support that works 24/7.**