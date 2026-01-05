# Professional CV Web Application

A modern, responsive single-page web application for displaying your professional CV/resume. Built with Next.js 14, React, TypeScript, and Tailwind CSS.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14+-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)

## ✨ Features

- 🎨 **Clean, Modern Design** - Professional aesthetic with smooth animations
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 📄 **Downloadable CV** - Easy PDF download functionality
- ⚡ **Fast Performance** - Optimized with Next.js SSG for lightning-fast loads
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🎯 **SEO Optimized** - Meta tags and semantic HTML for better visibility
- 🚀 **Easy Deployment** - One-click deploy to Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 📁 Project Structure

```
linkedin-cv-profile/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main CV page
│   └── globals.css          # Global styles
├── components/
│   ├── ProfileHeader.tsx    # Profile photo, name, title, links
│   ├── Introduction.tsx     # Professional summary and highlights
│   └── DownloadButton.tsx   # CV download functionality
├── public/
│   ├── cv.pdf              # Your CV file (add this)
│   └── profile-photo.jpg   # Your photo (add this)
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Update Your Information

1. **Profile Header** (`components/ProfileHeader.tsx`)
   - Update name, title, location
   - Change email, LinkedIn, GitHub links
   - Modify bio text

2. **Introduction** (`components/Introduction.tsx`)
   - Edit the "About Me" section
   - Update key highlights
   - Modify skills list

3. **Metadata** (`app/layout.tsx`)
   - Update page title and description
   - Add your keywords for SEO

### Customize Styling

The app uses Tailwind CSS. Main color scheme:
- Primary: Blue (600-800)
- Background: Gray (50-100)
- Text: Gray (600-900)

To change colors, edit the className props in component files.

## 📝 Adding Your CV and Photo

### CV File

1. Export your CV as a PDF
2. Rename it to `cv.pdf`
3. Place it in the `/public` directory
4. The download button will automatically serve this file

### Profile Photo

1. Choose a professional headshot (square ratio recommended)
2. Optimize for web (recommended: 500x500px, under 200KB)
3. Rename to `profile-photo.jpg` (or update the path in `ProfileHeader.tsx`)
4. Place in the `/public` directory

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Deploy Steps

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Your site will be live in under a minute! ⚡

## 🛠️ Technologies Used

- **[Next.js 14+](https://nextjs.org/)** - React framework with App Router
- **[React 18+](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Lucide React](https://lucide.dev/)** - Beautiful icons

## 🆘 Troubleshooting

**Images not showing?**
- Ensure files are in `/public` directory
- Check file names match exactly (case-sensitive)
- Clear browser cache and reload

**Build errors?**
- Run `npm install` again
- Check Node.js version (should be 18+)
- Delete `.next` folder and rebuild

## 📄 License

MIT License - feel free to use this for your own CV!

---

**Built with ❤️ using Next.js and React**

