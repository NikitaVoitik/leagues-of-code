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
│       └── constants.js         # Design tokens & style functions
│
├── public/                      # Static assets
│   ├── favicon.png
│   ├── 1.png                    # Approach images
│   └── 2.png
│
├── .env.example                 # Environment variables template
├── .env.local                   # Your actual env vars (gitignored)
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

### Typography
- **Font:** Inter (loaded from Google Fonts)
- Usage: Automatically applied via `font-sans` class

### Colors (LoC Brand)
Use directly in Tailwind classes:
- Blue: `#3959ff` → `bg-[#3959ff]`
- Sky Blue: `#38c9ff`
- Yellow: `#f8cd46`
- Red: `#eb4869`
- Purple: `#cf75ff`
- Green: `#23c175`

### Grid Background
For sections with grid pattern:
```jsx
import { COLORS, STYLES, GRID_SIZES } from "@/lib/constants";

<div style={STYLES.gridBackground(COLORS.primary, COLORS.primaryHover, GRID_SIZES.medium)}>
```

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

- **Framework:** Next.js 15.5.2 (App Router)
- **React:** 19.1.0
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)
- **Code Quality:** ESLint + Prettier

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
