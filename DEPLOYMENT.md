# Deployment Guide

## Vercel Deployment (Recommended)

Vercel is the easiest and fastest way to deploy your Next.js CV website.

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Step-by-Step Guide

#### Option 1: GitHub Integration

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Professional CV site"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Done!**
   - Your site will be live at: `your-project.vercel.app`
   - Every push to `main` auto-deploys

#### Option 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts**
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

### Custom Domain

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for SSL certificate (automatic)

## Alternative Deployment Options

### Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Deploy**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### AWS Amplify

1. Connect your Git repository
2. Build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy automatically on push

### Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t cv-website .
docker run -p 3000:3000 cv-website
```

### Static Export

For static hosting (GitHub Pages, S3, etc.):

1. Update `next.config.ts`:
   ```typescript
   const nextConfig = {
     output: 'export',
   };
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Deploy the `out` directory

## Environment Variables

This project doesn't require environment variables by default. If you add analytics or other services:

1. Create `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   ```

2. Add to Vercel:
   - Project Settings → Environment Variables
   - Add each variable
   - Redeploy

## Performance Optimization

### Before Deployment Checklist

- [ ] Optimize images (compress to <200KB)
- [ ] Minimize CV PDF size (<2MB)
- [ ] Remove console.logs
- [ ] Test on multiple devices
- [ ] Check Lighthouse scores
- [ ] Verify all links work

### After Deployment

1. **Test Performance**
   - Run Lighthouse audit
   - Test on different networks
   - Check Core Web Vitals

2. **Monitor**
   - Set up Vercel Analytics (free)
   - Monitor error logs
   - Track page views

## Continuous Deployment

### Automatic Deploys

When using Vercel + GitHub:
- Push to `main` → Production deploy
- Push to other branches → Preview deploy
- Pull requests → Preview deploy

### Manual Deploys

```bash
# Production
vercel --prod

# Preview
vercel
```

## Rollback

If something goes wrong:

1. Go to Vercel dashboard
2. Click "Deployments"
3. Find previous working deployment
4. Click "Promote to Production"

## Custom Configuration

### Redirects

In `next.config.ts`:
```typescript
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/cv.pdf',
        permanent: true,
      },
    ];
  },
};
```

### Headers

```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/cv.pdf',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

## Troubleshooting

**Build fails on Vercel**
- Check Node.js version (should be 18+)
- Verify all dependencies are in package.json
- Check build logs for specific errors

**Images not loading**
- Ensure files are in /public directory
- Check file paths are correct
- Verify files are committed to git

**Slow performance**
- Optimize images with next/image
- Enable caching headers
- Use Vercel Analytics to identify bottlenecks

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)

---

Happy deploying! 🚀
