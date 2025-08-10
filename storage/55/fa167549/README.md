# SnapToPDF - Free PDF Converter

## Overview

SnapToPDF is a free, browser-based PDF conversion tool that allows users to convert various file types to PDF without registration or installation. All processing happens directly in the browser, ensuring privacy and security.

## Features

- **Convert Multiple File Types**: Images, Word documents, Excel spreadsheets, PowerPoint presentations, and text files
- **PDF Compression**: Adjust quality settings to control file size
- **PDF Resizing**: Resize PDFs to standard formats (A4, Letter) or custom dimensions
- **Privacy First**: All processing happens in your browser - no uploads to servers
- **No Registration**: Use the tool without creating an account
- **Mobile Friendly**: Works on all devices including phones and tablets

## Technical Stack

- React + TypeScript
- Tailwind CSS for styling
- pdf-lib for PDF manipulation
- Shadcn/UI component library

## Deployment

This project is ready for deployment to Cloudflare Pages or any static hosting service.

### Requirements

- Node.js 16+
- pnpm (preferred) or npm

### Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Lint code
pnpm run lint
```

## Cloudflare Pages Deployment

1. Push this repository to GitHub
2. Connect to Cloudflare Pages
3. Set build command as `pnpm install && pnpm run build`
4. Set build directory as `dist`
5. Deploy

## Custom Domain Setup

This application is configured to use the domain: `snaptopdf.com`

### DNS Configuration (Cloudflare)

1. Add the domain to your Cloudflare account
2. Configure A records to point to Cloudflare Pages
3. Ensure SSL is set to Full/Strict
4. Add page rules if needed for caching strategies

## License

This project is free to use and modify.