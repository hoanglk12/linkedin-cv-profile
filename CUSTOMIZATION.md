# Customization Guide

This guide will help you personalize every aspect of your Professional CV website.

## 🎨 Quick Customization Checklist

- [ ] Update personal information
- [ ] Change profile photo
- [ ] Update CV PDF
- [ ] Customize colors (optional)
- [ ] Modify content sections
- [ ] Update meta tags for SEO

## 📝 Content Customization

### 1. Profile Header

**File**: `components/ProfileHeader.tsx`

#### Name and Title
```tsx
// Line 23-28
<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
  Your Full Name  // ← Change this
</h1>
<h2 className="text-xl sm:text-2xl text-gray-600 mb-4">
  Your Professional Title  // ← Change this
</h2>
```

#### Location
```tsx
// Line 30-32
<div className="flex items-center text-gray-500 mb-4">
  <MapPin className="w-4 h-4 mr-2" />
  <span>Your City, State/Country</span>  // ← Change this
</div>
```

#### Bio
```tsx
// Line 37-41
<p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
  Write a compelling 2-3 sentence bio about yourself...
</p>
```

#### Contact Links
```tsx
// Email - Line 49
href="mailto:your.email@example.com"  // ← Change this

// LinkedIn - Line 57
href="https://linkedin.com/in/yourprofile"  // ← Change this

// GitHub - Line 67
href="https://github.com/yourusername"  // ← Change this
```

### 2. Introduction Section

**File**: `components/Introduction.tsx`

#### About Me Text
```tsx
// Lines 32-50
<p className="text-gray-700 leading-relaxed mb-4">
  Write your first paragraph...
</p>
<p className="text-gray-700 leading-relaxed mb-4">
  Write your second paragraph...
</p>
<p className="text-gray-700 leading-relaxed">
  Write your third paragraph...
</p>
```

#### Key Highlights
```tsx
// Lines 9-26
const highlights = [
  {
    icon: Code,  // Keep or change icon
    title: "Your Highlight Title",
    description: "Your highlight description"
  },
  // Add more highlights...
];
```

Available icons from lucide-react:
- `Code`, `Rocket`, `Users`, `Award`
- `Target`, `Zap`, `Star`, `TrendingUp`
- `Briefcase`, `GraduationCap`, `Globe`

#### Skills List
```tsx
// Lines 60-64
{[
  'Your', 'Skill', 'List', 'Here', 'Add', 'More'
].map((skill) => (
  <span key={skill}>...</span>
))}
```

### 3. Page Metadata

**File**: `app/layout.tsx`

```tsx
// Lines 16-23
export const metadata: Metadata = {
  title: "Your Name - Professional CV",
  description: "Your professional description...",
  keywords: ["Your", "Keywords", "Here"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Professional CV",
    description: "Your description",
    type: "website",
  },
};
```

## 🎨 Design Customization

### Color Scheme

The app uses Tailwind CSS colors. Here's how to change them:

#### Primary Color (Currently Blue)

Find and replace in all component files:

**From:**
- `bg-blue-600` → `bg-purple-600`
- `bg-blue-700` → `bg-purple-700`
- `bg-blue-800` → `bg-purple-800`
- `text-blue-600` → `text-purple-600`
- `hover:bg-blue-700` → `hover:bg-purple-700`

**Available colors:**
- `blue`, `indigo`, `purple`, `pink`, `red`
- `orange`, `yellow`, `green`, `teal`, `cyan`

#### Background Colors

**Light backgrounds:**
```tsx
from-gray-50 to-gray-100  // Page background
bg-gray-50                // Card hover states
```

**Dark backgrounds:**
```tsx
bg-gray-800  // Footer
bg-gray-900  // GitHub button
```

### Typography

#### Font Sizes

**Headers:**
```tsx
text-3xl sm:text-4xl  // Name (h1)
text-xl sm:text-2xl   // Title (h2)
text-2xl sm:text-3xl  // Section headers
```

**Body text:**
```tsx
text-base sm:text-lg  // Bio
text-sm              // Small text
```

#### Font Families

The app uses Geist font by default. To change:

**File**: `app/layout.tsx`
```tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Then in body:
className={`${inter.variable} antialiased`}
```

Popular fonts: `Inter`, `Roboto`, `Poppins`, `Montserrat`, `Open_Sans`

### Spacing and Layout

#### Max Width
```tsx
max-w-5xl  // Main content container
max-w-3xl  // Bio text
max-w-2xl  // CTA text
```

#### Padding
```tsx
px-4 sm:px-6 lg:px-8  // Responsive horizontal padding
py-12                  // Vertical padding
p-8                    // All sides padding
```

#### Rounded Corners
```tsx
rounded-2xl  // Cards and sections
rounded-lg   // Buttons and smaller elements
rounded-full // Circular elements
```

### Shadows

```tsx
shadow-lg    // Cards
shadow-xl    // Hover states
shadow-sm    // Small elements
```

## 🎯 Advanced Customization

### Add Social Links

Add more social links in `ProfileHeader.tsx`:

```tsx
<a
  href="https://twitter.com/yourhandle"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors duration-200"
>
  <Twitter className="w-5 h-5" />
  <span className="font-medium">Twitter</span>
</a>
```

Other icons: `Twitter`, `Instagram`, `Facebook`, `Youtube`, `Globe`

### Add New Sections

Create a new component, e.g., `components/Experience.tsx`:

```tsx
export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Work Experience
      </h2>
      {/* Your content */}
    </div>
  );
}
```

Then add to `app/page.tsx`:

```tsx
import Experience from '@/components/Experience';

// In the main content area:
<div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
  <Experience />
</div>
```

### Customize Download Button

**File**: `components/DownloadButton.tsx`

Change button styles:
```tsx
// Header variant
className="... bg-green-600 hover:bg-green-700 ..."

// CTA variant
className="... bg-white text-green-600 ..."
```

Change button text:
```tsx
<span>Get My Resume</span>
```

### Animation Effects

Add custom animations:

```tsx
// Fade in
className="animate-fade-in"

// Slide up
className="transform translate-y-4 animate-slide-up"

// Bounce
className="animate-bounce"
```

## 📱 Responsive Design

### Mobile-First Breakpoints

```tsx
// Mobile only
className="block sm:hidden"

// Tablet and up
className="hidden sm:block"

// Desktop only
className="hidden lg:block"
```

### Responsive Values

```tsx
// Text sizes
text-base sm:text-lg lg:text-xl

// Padding
px-4 sm:px-6 lg:px-8

// Grid columns
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

## 🔧 Configuration Files

### Next.js Config

**File**: `next.config.ts`

```typescript
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Image optimization
  images: {
    unoptimized: true, // For static export
  },
};
```

### TypeScript Config

**File**: `tsconfig.json`

Usually no changes needed, but you can adjust strictness:

```json
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true
  }
}
```

## 💡 Tips

1. **Test after each change**: Run `npm run dev` and check the result
2. **Use browser dev tools**: Press F12 to inspect elements
3. **Mobile testing**: Use responsive mode in dev tools
4. **Keep backups**: Commit changes with git regularly
5. **Tailwind reference**: Keep [tailwindcss.com](https://tailwindcss.com) open

## 🎨 Color Palette Suggestions

### Professional Blue (Current)
- Primary: `blue-600`
- Accent: `blue-700`
- Background: `gray-50`

### Modern Purple
- Primary: `purple-600`
- Accent: `purple-700`
- Background: `purple-50`

### Tech Green
- Primary: `green-600`
- Accent: `green-700`
- Background: `gray-50`

### Creative Orange
- Primary: `orange-600`
- Accent: `orange-700`
- Background: `orange-50`

### Elegant Indigo
- Primary: `indigo-600`
- Accent: `indigo-700`
- Background: `indigo-50`

## 📝 Content Writing Tips

### Bio Section
- Keep it concise (2-3 sentences)
- Lead with your strongest skill/experience
- Show personality while staying professional
- Use active voice

### About Me
- Start with current role/focus
- Mention years of experience
- Highlight specializations
- Show passion for your work
- End with personal interests or values

### Skills
- List 10-15 core technologies
- Order by proficiency or relevance
- Include both technical and soft skills
- Keep it current

## 🆘 Need Help?

- Check component files for inline comments
- Review Tailwind CSS documentation
- Test changes in dev mode (`npm run dev`)
- Use browser dev tools to experiment
- Commit working changes with git

---

Happy customizing! Make it yours! 🎨
