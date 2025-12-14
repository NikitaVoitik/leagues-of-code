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

5. Open http://localhost:3000 in your browser

## 📁 Project Structure

```
LoC/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx             # Homepage (typed)
│   │   ├── layout.tsx           # Root layout (Inter font, GA, typed)
│   │   ├── globals.css          # Global styles
│   │   ├── curriculum/          # Curriculum page (client, typed)
│   │   ├── privacy/             # Privacy policy page (typed)
│   │   └── terms/               # Terms of service page (typed)
│   │
│   ├── components/
│   │   ├── sections/            # Page sections
│   │   │   ├── Hero.tsx         # Hero section (typed)
│   │   │   ├── Approach.tsx     # Approach section (typed)
│   │   │   ├── Process.tsx      # Process section (typed)
│   │   │   ├── Reviews.tsx      # Reviews/testimonials (typed)
│   │   │   └── Footer.tsx       # Footer with CTA (typed)
│   │   │
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── Button.tsx       # CTA button (typed)
│   │   │   └── Separator.tsx    # Section separator (typed)
│   │   │
│   │   └── layouts/             # Layout components
│   │       └── LegalPageLayout.tsx  # Legal pages wrapper (typed)
│   │
│   └── lib/                     # Utilities & data
│       ├── content.ts           # All text content (Single Source of Truth, typed)
│       └── constants.ts         # Design system (colors, styles, grid, typed)
│
├── src/app/curriculum/styles/   # Modular CSS for curriculum page
│   ├── variables.css            # Tokens (colors, spacing, typography)
│   ├── base.css                 # Base/layout/typography/utilities
│   ├── hero.css                 # Hero section
│   ├── timeline.css             # Timeline nodes
│   ├── stack.css                # Stacked cards
│   └── placement-details.css    # Placement and league detail sections
│
├── public/                      # Static assets
│   ├── favicon.png
│   ├── 1.png                    # Approach image (full quality)
│   └── 2.png                    # Approach image (full quality)
│
├── .env.example                 # Environment variables template
├── .env.local                   # Your actual env vars (gitignored)
├── tsconfig.json                # TypeScript config (paths, strict mode)
├── refactoring_next.md          # Refactoring log & next steps
└── package.json
```

## ✏️ How to Update Content

### Update Text Content
All text is centralized in `src/lib/content.ts`:

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
Edit once in `src/lib/content.ts`:
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

All design tokens centralized in `src/lib/constants.ts` for consistency.

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
- `NEXT_PUBLIC_SITE_URL` - Public site URL for metadata/OG tags
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (omit to disable)
- `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_FACEBOOK_URL` - Social links (optional)

## 📊 Tech Stack

- **Framework:** Next.js 15.5.2 (App Router, SSR optimized)
- **React:** 19.1.0
- **TypeScript:** Tooling enabled (tsconfig, strict mode; migration in progress)
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
