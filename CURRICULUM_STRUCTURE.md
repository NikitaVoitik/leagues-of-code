# 📚 Curriculum Page Structure Blueprint

**Status:** ✅ Phase 1 Complete - Architecture Established  
**Approach:** Hybrid (Pure CSS/Vanilla JS + Reused Components)  
**Date:** October 14, 2025

---

## 🏗️ Architecture Overview

### **Hybrid Strategy:**
- ✅ **Pure CSS** - No Tailwind for curriculum-specific components
- ✅ **Vanilla JavaScript** - No React hooks for interactivity
- ✅ **CSS Variables** - Modern design token system
- ✅ **Reused Components** - Footer, Separator (for consistency)
- ✅ **Next.js Integration** - Uses App Router structure

---

## 📁 File Structure

```
src/app/curriculum/
├── page.js              # Main Next.js page wrapper
├── curriculum.css       # Pure CSS with modern best practices
└── curriculum.js        # Vanilla JavaScript for interactivity

src/lib/content.js       # Added curriculum content data
```

---

## 🎨 CSS Architecture (curriculum.css)

### **Design Tokens (CSS Variables):**
```css
:root {
  /* Brand Colors */
  --color-primary: #3959ff
  --color-sky-blue: #38c9ff
  --color-yellow: #f8cd46
  --color-red: #eb4869
  --color-purple: #cf75ff
  --color-green: #23c175
  
  /* Fluid Typography with clamp() */
  --font-size-4xl: clamp(2.5rem, 2rem + 2vw, 4rem)
  
  /* Logical Properties */
  padding-block, padding-inline, margin-block-end, etc.
  
  /* Neo-brutalism Shadows */
  --shadow-md: 4px 4px 0px 0px var(--color-black)
}
```

### **Modern CSS Features Used:**
- ✅ CSS Variables (`:root`)
- ✅ Fluid Typography (`clamp()`)
- ✅ Logical Properties (`padding-block`, `inline-size`, etc.)
- ✅ `aspect-ratio` for media (to be added)
- ✅ Grid background pattern
- ✅ Mobile-first media queries
- ✅ Dark mode support (`prefers-color-scheme`)
- ✅ Smooth transitions
- ✅ Modern viewport units (`svh`, `svw`)
- ✅ Focus-visible for accessibility

---

## 📊 Content Structure (content.js)

```javascript
curriculum: {
  hero: {
    title: "Our Curriculum",
    subtitle: "5 Leagues • 50 Modules • Endless Possibilities",
    description: "..."
  },
  leagues: [
    {
      id: "apprentice",
      name: "Apprentice League",
      level: "Beginner",
      color: "#23c175",
      modules: 10,
      ageRange: "9-11 years",
      skills: [...]
    },
    // ... 4 more leagues
  ]
}
```

---

## 🎯 Development Phases

### ✅ **Phase 1: Setup & Architecture** (COMPLETE)
- [x] Created `/app/curriculum` folder
- [x] Set up `curriculum.css` with CSS variables
- [x] Set up `curriculum.js` vanilla JS module
- [x] Created basic `page.js` wrapper
- [x] Added curriculum data to `content.js`
- [x] Integrated Footer and Separator components

---

### 📋 **Phase 2: Hero Section** (NEXT)
**Components to Build:**
```
CurriculumHero
├── Large heading
├── Subtitle with separator styling
├── Description text
└── Optional CTA button
```

**Files to Create:**
- None (will add to existing `page.js`)
- Add styles to `curriculum.css`

**CSS Classes Needed:**
```css
.curriculum-hero { }
.curriculum-hero__title { }
.curriculum-hero__subtitle { }
.curriculum-hero__description { }
```

---

### 📋 **Phase 3: League Overview Cards** (UPCOMING)
**Components to Build:**
```
LeagueOverview
├── Grid of 5 league cards
├── Each card shows:
│   ├── League name & level
│   ├── Color indicator
│   ├── Module count
│   ├── Age range
│   └── "Learn More" button
└── Hover effects (Neo-brutalism shadow)
```

**CSS Classes Needed:**
```css
.league-grid { display: grid; }
.league-card { }
.league-card__badge { }
.league-card__title { }
.league-card__meta { }
```

**JavaScript Needed:**
- Card click handlers
- Smooth scroll to details

---

### 📋 **Phase 4: League Details** (UPCOMING)
**Components to Build:**
```
LeagueDetails (Accordion/Expandable)
├── Detailed description
├── Skills breakdown
├── Module list (10 modules per league)
├── Prerequisites
└── Expected outcomes
```

**JavaScript Needed:**
```javascript
- toggleLeagueDetails(leagueId)
- expandAllLeagues()
- collapseAllLeagues()
```

---

### 📋 **Phase 5: Interactive Features** (UPCOMING)
**Features to Add:**
- Filter by age range
- Search modules
- Progress indicator (if logged in)
- Smooth scroll navigation
- Keyboard accessibility (arrow keys)

---

### 📋 **Phase 6: Polish & Optimization** (FINAL)
- Accessibility audit (WCAG AA)
- Performance optimization
- Animation refinements
- Mobile responsive testing
- Cross-browser testing

---

## 🔌 Integration Points

### **Reused Components:**
1. **Footer** - `<Footer />` (existing)
2. **Separator** - `<Separator text="..." />` (existing)

### **New Pure CSS/JS Components:**
1. **CurriculumHero** - Pure CSS
2. **LeagueOverview** - Pure CSS + Vanilla JS
3. **LeagueDetails** - Pure CSS + Vanilla JS
4. **LeagueCard** - Pure CSS + Vanilla JS

---

## 🎨 Design Consistency

### **Matching Current Design:**
- ✅ Neo-brutalism style (black borders, drop shadows)
- ✅ Grid background pattern
- ✅ Inter font
- ✅ Same color palette
- ✅ Same spacing system
- ✅ Same card styling

### **CSS Variable Mapping:**
```
Current (Tailwind)          →  New (CSS Variables)
---------------------------------------------------
bg-[#3959ff]               →  background-color: var(--color-primary)
shadow-[4px_4px_0px...]    →  box-shadow: var(--shadow-md)
border-2 border-black      →  border: var(--border-width) solid var(--color-black)
```

---

## 📝 Code Standards

### **CSS Naming Convention:**
```
Block__Element--Modifier (BEM-like)

.curriculum-hero
.curriculum-hero__title
.curriculum-hero__title--large
.league-card
.league-card__badge
.league-card--active
```

### **JavaScript Style:**
```javascript
// Module pattern
const CurriculumPage = {
  init() { },
  method() { }
};

// Event delegation
// Modern ES6+
// No jQuery
```

---

## 🚀 Current Status

**Completed:**
- ✅ File structure created
- ✅ CSS variables system established
- ✅ Vanilla JS module initialized
- ✅ Content data structure defined
- ✅ Basic page integration done
- ✅ Footer and Separator reused

**Next Steps:**
1. Build Hero section (Phase 2)
2. Add league overview cards (Phase 3)
3. Implement interactivity (Phase 4)

**URL:** `/curriculum`  
**Access:** http://localhost:3000/curriculum

---

## 🎯 Key Decisions Made

1. ✅ **Hybrid approach** - Best of both worlds
2. ✅ **Pure CSS for curriculum** - No Tailwind conflicts
3. ✅ **Vanilla JS** - No React hooks for interactive features
4. ✅ **Reuse Footer/Separator** - Design consistency
5. ✅ **CSS variables** - Modern, maintainable approach
6. ✅ **Mobile-first** - Responsive from the start
7. ✅ **Accessible** - Focus states, semantic HTML

---

**Ready to proceed to Phase 2! 🚀**
