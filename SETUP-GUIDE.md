# Quick Setup Guide

Follow these steps to get your Professional CV website up and running:

## 1. ✅ Installation Complete

The Next.js project is already set up with all dependencies installed.

## 2. 📝 Add Your Content

### Update Profile Information

Edit `components/ProfileHeader.tsx`:
- Line 23-25: Change "John Doe" to your name
- Line 26-28: Update your professional title
- Line 30-32: Change your location
- Line 37-41: Update your bio/summary
- Line 49-51: Add your email address
- Line 55-61: Add your LinkedIn URL
- Line 65-71: Add your GitHub URL

### Update Introduction

Edit `components/Introduction.tsx`:
- Lines 32-50: Update the "About Me" section with your story
- Lines 9-26: Customize the key highlights with your achievements
- Lines 60-64: Update the skills list with your technologies

### Update Metadata

Edit `app/layout.tsx`:
- Line 16: Change the title to your name
- Line 17: Update the description
- Line 18: Add relevant keywords

## 3. 📁 Add Your Files

### Add Your CV PDF

1. Export your CV as a PDF
2. Name it exactly: `cv.pdf`
3. Place it in: `/public/cv.pdf`
4. Delete or ignore: `/public/cv-placeholder.txt`

### Add Your Profile Photo

1. Get a professional headshot
2. Resize to 500x500px (or similar square)
3. Optimize file size (aim for under 200KB)
4. Name it: `profile-photo.jpg`
5. Place it in: `/public/profile-photo.jpg`
6. Delete or ignore: `/public/photo-placeholder.txt`

## 4. 🚀 Test Locally

Run the development server:

```bash
npm run dev
```

Open: http://localhost:3000

Check:
- ✅ Profile photo displays correctly
- ✅ All text is updated with your information
- ✅ Download button works and opens your CV
- ✅ Social links work correctly
- ✅ Mobile responsive (resize browser)

## 5. 🎨 Optional Customization

### Change Colors

The app uses blue as the primary color. To change:

1. Open any component file
2. Find classes like: `bg-blue-600`, `text-blue-600`
3. Replace `blue` with another color:
   - `red`, `green`, `purple`, `indigo`, `pink`, etc.

### Add More Sections

You can add new sections by:
1. Creating a new component in `/components`
2. Importing it in `app/page.tsx`
3. Adding it to the layout

## 6. 📦 Build for Production

When ready to deploy:

```bash
npm run build
```

This optimizes your site for production.

## 7. 🌐 Deploy to Vercel

### Method 1: Using Git

1. Push code to GitHub:
```bash
git add .
git commit -m "My professional CV site"
git push origin main
```

2. Go to: https://vercel.com
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

### Method 2: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts and your site will be deployed!

## 8. 🎉 You're Done!

Your professional CV website is now live! Share the URL with:
- Potential employers
- Professional networks
- Your LinkedIn profile
- Email signature

## 📋 Checklist

Before deploying, make sure:

- [ ] All personal information is updated
- [ ] Profile photo is added and displays correctly
- [ ] CV PDF is added and downloads work
- [ ] All social links are correct and working
- [ ] Content is proofread (no typos!)
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] CV PDF is up to date

## 🆘 Need Help?

Check the main README.md for:
- Detailed documentation
- Troubleshooting guide
- Technology references
- Deployment options

## 💡 Pro Tips

1. **Keep it updated**: Regularly update your CV and website content
2. **Monitor analytics**: Consider adding Google Analytics
3. **Custom domain**: Connect a custom domain on Vercel for a professional touch
4. **SEO**: Update meta tags in `layout.tsx` for better search visibility
5. **Performance**: Keep images optimized and CV file size reasonable

---

Good luck with your professional CV website! 🚀
