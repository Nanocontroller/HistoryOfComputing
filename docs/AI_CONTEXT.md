# 🤖 AI Context Document - History of Computing Timeline

**Last Updated:** July 2026  
**Project Status:** ✅ Deployed & Working  
**Live URL:** https://nanocontroller.github.io/HistoryOfComputing/

---

## 📋 **Quick Overview**

Interactive horizontal timeline showcasing computing history at Argonne National Laboratory (1940-2020).

**Tech Stack:**
- Vite (build tool)
- Vanilla JavaScript (ES6 modules)
- CSS with theme variables
- GitHub Pages (deployment)

**Key Features:**
- ✅ Horizontal timeline (desktop) / Vertical (mobile)
- ✅ Dark/Light theme toggle
- ✅ Real-time search
- ✅ Smooth scroll indicator
- ✅ Collapsible search
- ✅ Modal popups with details
- ✅ Full accessibility (WCAG 2.1 AA)
- ✅ Responsive design

---

## 🎯 **Current State (Phase 2 Complete)**

### **What Works:**
- ✅ Vite build system with hot reload
- ✅ ES6 modular architecture (7 focused modules)
- ✅ Dark/Light theme with localStorage persistence
- ✅ Smooth trackpad/mouse wheel scrolling
- ✅ Arrow key navigation (←/→)
- ✅ Scroll progress indicator (moves smoothly)
- ✅ Collapsible search (🔍 icon to expand)
- ✅ Modal animations (smooth fade-in/out)
- ✅ Mobile: Vertical scroll, full-width content
- ✅ Mobile: Auto-hiding header on scroll
- ✅ Mobile: Compact UI (buttons, dropdown)
- ✅ Image zoom on hover (desktop)
- ✅ ANL-aligned professional design

### **Recent Major Changes:**
1. **Modernized infrastructure** - Added Vite, split into ES6 modules
2. **Enhanced UX** - Theme toggle, smooth animations, card elevation
3. **Fixed deployment** - Corrected paths for GitHub Pages
4. **Mobile overhaul** - Vertical scroll, full-width, compact header
5. **Search UX** - Made collapsible with icon toggle
6. **Scroll indicator** - Smooth interpolation instead of jumping

---

## 📁 **Project Structure**

```
HistoryOfComputing/
├── src/
│   ├── main.js                    # Entry point, orchestrates everything
│   ├── modules/
│   │   ├── state.js               # App state & localStorage
│   │   ├── timeline.js            # Timeline rendering logic
│   │   ├── modal.js               # Modal popups (Read more)
│   │   ├── search.js              # Search & filtering
│   │   ├── theme.js               # Dark/Light theme toggle
│   │   ├── keyboard.js            # Keyboard & trackpad navigation
│   │   ├── scrollIndicator.js    # Blue pill position indicator
│   │   └── mobileHeader.js        # Mobile header auto-hide
│   ├── utils/
│   │   └── helpers.js             # Utility functions (escapeHtml, etc)
│   └── styles/
│       ├── theme.css              # Theme CSS variables
│       └── components.css         # Enhanced component styles
│
├── public/
│   ├── data.json                  # Timeline data (52KB)
│   ├── select.js                  # Mobile dropdown (legacy)
│   └── select.css                 # Mobile dropdown styles
│
├── style.css                      # Main styles (includes theme inline)
├── index.html                     # Main HTML
├── vite.config.js                 # Vite configuration
├── package.json                   # npm dependencies
│
├── docs/                          # Documentation (Phase 1)
├── AI_CONTEXT.md                  # This file
├── CHANGELOG_PHASE2.md            # What we did in Phase 2
├── KNOWN_ISSUES.md                # Current issues & limitations
└── NEXT_STEPS.md                  # Future enhancements
```

---

## 🔧 **How It Works**

### **Build & Deploy Process:**
```bash
# Development
npm run dev          # Starts Vite dev server at localhost:3000

# Production
npm run build        # Builds to dist/ folder
npx gh-pages -d dist # Deploys to GitHub Pages

# One-line deploy
npm run build && npx gh-pages -d dist
```

### **Module Flow:**
1. **main.js** loads data from `./data.json` (relative path for GH Pages)
2. **timeline.js** renders decades and year cards
3. **modal.js** handles "Read more" popups
4. **search.js** filters cards in real-time
5. **theme.js** toggles dark/light mode
6. **keyboard.js** handles trackpad & arrow key scrolling
7. **scrollIndicator.js** moves blue pill based on scroll position
8. **mobileHeader.js** auto-hides header on mobile scroll

### **Data Flow:**
```
fetch('./data.json')
  → setState('data', json)
  → renderData() creates DOM elements
  → Modules initialize (search, modal, keyboard, etc)
  → User interactions trigger module functions
```

---

## 🎨 **Design System**

### **Colors:**
```css
/* Dark Theme (Default) */
--bg-primary: #1d1651       /* Deep purple */
--text-primary: #ffffff     /* White text */
--accent-primary: #118acb   /* ANL blue */
--border-color: #118acb     /* Blue borders */

/* Light Theme */
--bg-primary: #ffffff       /* White */
--text-primary: #1a202c     /* Dark gray */
--accent-primary: #0066cc   /* Professional blue */
--border-color: #cbd5e0     /* Light gray */
```

### **Typography:**
- Font: Montserrat (Google Fonts)
- Desktop Title: 68px
- Mobile Title: 24px
- Body: 19px (desktop), 16px (mobile)

### **Key Measurements:**
- Desktop timeline: Horizontal scroll
- Mobile timeline: Vertical scroll
- Scroll indicator: 50px wide × 8px tall (desktop only)
- Header height: ~100px (desktop), ~100px (mobile, auto-hides)
- Card padding: 24px (desktop), 16px (mobile)

---

## 🐛 **Known Issues** (see KNOWN_ISSUES.md)

### **Minor:**
1. Image zoom on hover may not work on all images (check CSS class application)
2. Search results counter doesn't update smoothly (minor visual)
3. Theme transition could be smoother (currently 0.3s)

### **Limitations:**
1. No dark mode for images (images don't adjust to theme)
2. No back-to-top button (mobile)
3. No touch gestures (swipe to navigate)

---

## 🔑 **Critical Paths** (Don't Break These!)

### **1. Data Fetching:**
```javascript
// MUST use relative path for GitHub Pages
const response = await fetch('./data.json')  // ✅ Correct
// NOT: fetch('/data.json')  ❌ Breaks on GH Pages
```

### **2. Vite Base Path:**
```javascript
// vite.config.js
base: '/HistoryOfComputing/'  // MUST match repo name
```

### **3. Module Imports:**
```javascript
// All imports must be relative and use .js extension
import { state } from './modules/state.js'  // ✅ Correct
import { state } from './modules/state'     // ❌ Breaks in production
```

### **4. CSS Variables:**
```css
/* Theme variables MUST be inline in style.css */
/* @import doesn't work reliably in production */
:root { --bg-primary: #1d1651; }  /* ✅ Correct */
```

### **5. Mobile Scroll Direction:**
```javascript
// Mobile uses VERTICAL scroll (scrollTop)
// Desktop uses HORIZONTAL scroll (scrollLeft)
const scrollPosition = window.innerWidth > 768 
  ? container.scrollLeft   // Desktop
  : container.scrollTop    // Mobile
```

---

## 📝 **Common Tasks**

### **Adding a New Feature:**
1. Create module in `src/modules/newFeature.js`
2. Export `initNewFeature()` function
3. Import in `src/main.js`
4. Call in `init()` function
5. Add styles to `style.css`
6. Test with `npm run dev`
7. Build & deploy

### **Updating Styles:**
1. Edit `style.css` directly (main styles)
2. For theme colors: Update `:root` and `[data-theme="light"]`
3. Test in both themes
4. Test on mobile (< 768px)

### **Fixing Mobile Issues:**
1. Check `@media screen and (max-width:768px)` blocks
2. Test scroll direction (vertical, not horizontal)
3. Check header auto-hide logic in `mobileHeader.js`
4. Verify full-width content

### **Debugging Deployment:**
1. Check browser console for 404 errors
2. Verify paths are relative (`./data.json` not `/data.json`)
3. Check Vite base path matches repo name
4. Hard refresh: `Ctrl+Shift+R` or incognito mode
5. Wait 1-2 minutes for GitHub Pages to update

---

## 🚀 **Deployment Checklist**

Before deploying:
- [ ] `npm run dev` works locally
- [ ] No console errors (F12)
- [ ] Theme toggle works
- [ ] Search works
- [ ] Modal opens/closes
- [ ] Scroll indicator moves
- [ ] Mobile: vertical scroll works
- [ ] Mobile: content full-width
- [ ] Mobile: header auto-hides
- [ ] Test on both Chrome and Firefox

Deploy:
```bash
npm run build
npx gh-pages -d dist
git add -A
git commit -m "your message"
git push origin main
```

Wait 30-60 seconds, then hard refresh: `Ctrl+Shift+R`

---

## 💡 **Pro Tips for Next AI**

### **Understanding the Codebase:**
- Read `CHANGELOG_PHASE2.md` for context on what changed
- Check `KNOWN_ISSUES.md` for current problems
- Review `NEXT_STEPS.md` for planned improvements
- All modules follow same pattern: export `initModuleName()` function

### **Common Gotchas:**
- Paths MUST be relative (`./ not /`) for GitHub Pages
- Theme CSS must be inline in `style.css` (imports don't work in prod)
- Mobile uses vertical scroll, desktop uses horizontal
- Arrow keys work globally (don't require focus)
- Trackpad uses direct scroll (no animation) for better UX

### **Testing Strategy:**
- Always test in `npm run dev` first
- Test in both themes (dark/light)
- Test mobile by resizing browser < 768px
- Test in incognito to verify deployment
- Check console for any errors

### **User's Preferences:**
- Professional ANL-aligned design (no flashy animations)
- Minimal, functional approach
- Accessibility is priority
- Mobile must feel like normal mobile site (vertical scroll)
- Keep search collapsible/optional
- Header should auto-hide on mobile

---

## 📞 **Context for Continuing Work**

### **What User Likes:**
- ✅ Clean, minimal, professional design
- ✅ ANL color scheme (blues, purples, whites)
- ✅ Smooth but subtle animations
- ✅ Full accessibility
- ✅ Collapsible search (not always visible)
- ✅ Mobile: vertical scroll, full-width content

### **What User Doesn't Like:**
- ❌ Flashy, bouncy animations
- ❌ Bulky buttons on mobile
- ❌ Search taking up too much space
- ❌ Horizontal scroll on mobile
- ❌ Confusing UI elements

### **Communication Style:**
- User provides screenshots and specific feedback
- User lists all issues at once for batch fixing
- User tests thoroughly on both desktop and mobile
- User appreciates clear documentation

---

## 🎯 **If User Asks To...**

### **"Fix mobile scrolling"**
→ Check `mobileHeader.js` and mobile CSS (`@media (max-width:768px)`)
→ Ensure vertical scroll (scrollTop not scrollLeft)
→ Verify content is full-width

### **"Make something smaller"**
→ Check `@media` blocks in `style.css`
→ Add `!important` if needed to override
→ Test on actual mobile device or narrow browser

### **"Fix deployment issues"**
→ Check paths are relative (`./` not `/`)
→ Verify `vite.config.js` base path
→ Check browser console for 404s
→ Try hard refresh or incognito

### **"Add a feature"**
→ Create new module
→ Follow existing module pattern
→ Import and initialize in `main.js`
→ Add styles to `style.css`
→ Test, build, deploy

---

## ✅ **You're Ready To Continue!**

This project is well-organized, documented, and ready for the next phase of development. All the infrastructure is in place, the UX is solid, and the codebase is maintainable.

**Key Files for Next Session:**
- `CHANGELOG_PHASE2.md` - What we accomplished
- `KNOWN_ISSUES.md` - What needs fixing
- `NEXT_STEPS.md` - Future enhancements
- This file - Full context

**Good luck! 🚀**
