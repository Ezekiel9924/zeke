# Cloudflare Pages Deployment Guide for SnapToPDF

This guide walks through deploying SnapToPDF to Cloudflare Pages and configuring your custom domain.

## Prerequisites

- A GitHub account with this repository pushed
- A Cloudflare account
- Ownership of the domain snaptopdf.com

## Step 1: Push to GitHub

1. Create a new GitHub repository
2. Push this codebase to your repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/snaptopdf.git
git push -u origin main
```

## Step 2: Connect to Cloudflare Pages

1. Log in to your Cloudflare dashboard
2. Navigate to "Pages"
3. Click "Create a project"
4. Select "Connect to Git"
5. Authorize Cloudflare to access your GitHub account
6. Select your snaptopdf repository

## Step 3: Configure Build Settings

Configure your build settings:

- **Project name**: snaptopdf
- **Production branch**: main
- **Build command**: pnpm install && pnpm run build
- **Build output directory**: dist
- **Environment variables**: (none required)

## Step 4: Deploy

1. Click "Save and Deploy"
2. Wait for the build and deployment to complete
3. Your site will be available at a *.pages.dev URL

## Step 5: Configure Custom Domain

1. In the Cloudflare Pages project, go to "Custom domains"
2. Click "Set up a custom domain"
3. Enter "snaptopdf.com" and click "Continue"
4. Follow the verification steps if prompted

## Step 6: DNS Configuration

If your domain is already on Cloudflare:

1. Cloudflare will automatically configure the required DNS records
2. Ensure SSL/TLS encryption mode is set to "Full" or "Full (strict)"

If your domain is not on Cloudflare:

1. Add the necessary CNAME records to point to your *.pages.dev URL
2. Consider transferring your DNS to Cloudflare for easier management

## Step 7: Additional Optimizations

For best performance:

1. Enable Cloudflare's Auto Minify for HTML, CSS, and JavaScript
2. Set appropriate browser cache TTL settings
3. Consider enabling Cloudflare's Automatic Platform Optimization for WordPress if applicable

## Verification

After deployment, verify:

- The site loads correctly at snaptopdf.com
- SSL is working properly (lock icon in browser)
- All features function as expected
- Mobile responsiveness

## Troubleshooting

If you encounter issues:

1. Check Cloudflare Pages build logs
2. Verify DNS configuration
3. Ensure SSL is properly configured
4. Check for any JavaScript console errors