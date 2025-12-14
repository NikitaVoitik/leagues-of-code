# Leagues of Code - Landing Page

A modern, maintainable Next.js landing page for Leagues of Code online coding academy.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your actual values
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
LoC/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── page.js              # Homepage
│   │   ├── layout.js            # Root layout (Inter font, GA)
│   │   ├── globals.css          # Global styles
│   │   ├── curriculum/          # Curriculum page
│   │   ├── privacy/             # Privacy policy page
│   │   └── terms/               # Terms of service page
│   │
│   ├── components/
│   │   ├── sections/            # Page sections
│   │   │   ├── Hero.jsx         # Hero section
│   │   │   ├── Approach.jsx     # Approach section
│   │   │   ├── Process.jsx      # Process section
│   │   │   ├── Reviews.jsx      # Reviews/testimonials
│   │   │   └── Footer.jsx       # Footer with CTA
│   │   │
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── Button.jsx       # CTA button
│   │   │   └── Separator.jsx    # Section separator
│   │   │
│   │   └── layouts/             # Layout components
│   │       └── LegalPageLayout.jsx  # Legal pages wrapper
│   │
│   └── lib/                     # Utilities & data
│       ├── content.js           # All text content (Single Source of Truth)
│       └── constants.js         # Design system (colors, styles, grid)
│
├── public/                      # Static assets
│   ├── favicon.png
│   ├── 1.png                    # Approach images (optimize: 871KB → 200KB)
│   └── 2.png                    # Approach images (optimize: 319KB → 80KB)
│
├── .env.example                 # Environment variables template
├── .env.local                   # Your actual env vars (gitignored)
├── refactoring_next.md          # Refactoring log & next steps
└── package.json
```

## ✏️ How to Update Content

### Update Text Content
All text is centralized in `src/lib/content.js`:

```javascript
// Example: Change hero title
export const CONTENT = {
  hero: {
    title: {
      line1: "Your New Title",
      line2: "Second Line"
    },
    // ...
  }
}
```

### Update Contact Information
Edit once in `src/lib/content.js`:
```javascript
footer: {
  contact: {
    email: "hello@leaguesofcode.com",
    phone: "+34 671 498 303"
  }
}
```
This updates Footer, Privacy, and Terms pages automatically.

### Update Legal Pages Dates
```javascript
legal: {
  privacy: {
    lastUpdated: "August 16, 2023"
  },
  terms: {
    lastUpdated: "October 17, 2022"
  }
}
```

### Add New Images
1. Place images in `/public/` folder
2. Reference as `/image-name.png` in components

## 🎨 Design System

All design tokens centralized in `src/lib/constants.js` for consistency.

### Colors
**Always import from constants:**
```javascript
import { COLORS } from "@/lib/constants";

// Use in inline styles (recommended for dynamic values)
<div style={{ color: COLORS.grayText }}>
<div style={{ backgroundColor: COLORS.primaryDark }}>

// Or in Tailwind for static colors
<div className="bg-white text-black">
```

**Available colors:**
- `COLORS.primary` - Hero gradient start (#1E3CD9)
- `COLORS.primaryDark` - Buttons, badges (#1836CF)
- `COLORS.primaryHover` - Hover states (#2644E0)
- `COLORS.blue`, `skyBlue`, `yellow`, `red`, `purple`, `green` - Brand palette
- `COLORS.grayText` - Body text (#626262)
- `COLORS.grayTextDark` - Legal pages (#444444)
- `COLORS.background`, `backgroundGrid` - Page backgrounds

### Grid Background
```javascript
import { COLORS, STYLES, GRID_SIZES } from "@/lib/constants";

<div style={STYLES.gridBackground(
  COLORS.primaryDark,
  COLORS.primaryHover,
  GRID_SIZES.medium
)}>
```

### Typography
- **Font:** Inter (auto-applied via `font-sans` class)

## 🛠️ Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Check for errors
npm run lint:fix   # Fix linting errors
npm run format     # Format code with Prettier
npm run preview    # Build + start production locally
```

## 🔧 Environment Variables

See `.env.example` for all available variables:
- `NEXT_PUBLIC_BOOKING_URL` - Typeform booking link
- `NEXT_PUBLIC_EMAIL` - Contact email
- Google Analytics is configured in `layout.js`

## 📊 Tech Stack

- **Framework:** Next.js 15.5.2 (App Router, SSR optimized)
- **React:** 19.1.0
- **Styling:** Tailwind CSS 4 + Centralized design system
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)
- **Code Quality:** ESLint + Prettier

## 🚀 Performance

- **Bundle Size:** ~107 kB (homepage)
- **Rendering:** Static generation (all pages)
- **Server Components:** Hero, Footer (optimized SSR)
- **Client Components:** Only where needed (curriculum page)

## 📝 Maintenance

See `refactoring_next.md` for:
- Recent improvements
- Scheduled optimizations
- Code quality metrics
