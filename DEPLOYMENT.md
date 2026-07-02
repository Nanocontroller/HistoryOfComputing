# 🚀 Deployment Guide - GitHub Pages

## Quick Deploy (Automated)

```bash
# 1. Install gh-pages package
npm install --save-dev gh-pages

# 2. Build and deploy in one command
npm run deploy
```

That's it! Your site will be live at:
**https://nanocontroller.github.io/HistoryOfComputing/**

---

## Manual Deployment Steps

### Step 1: Build for Production
```bash
npm run build
```

This creates optimized files in the `dist/` folder.

### Step 2: Deploy to GitHub Pages

**Option A: Using gh-pages (Recommended)**
```bash
# Install gh-pages (one time)
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

**Option B: Manual via GitHub**
1. Push the `dist/` folder to a `gh-pages` branch
2. Go to GitHub repo settings
3. Enable GitHub Pages from `gh-pages` branch

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] `npm run build` completes without errors
- [ ] `npm run preview` shows the site working locally
- [ ] All changes committed to git
- [ ] Pushed to main branch

---

## 🔧 Configuration

### Vite Config (`vite.config.js`)
```javascript
base: '/HistoryOfComputing/'  // Must match repo name
```

### Package.json Scripts
```json
"deploy": "npm run build && gh-pages -d dist"
```

---

## 🌐 Your Site URLs

**Development:**
- Local: http://localhost:3000

**Production:**
- GitHub Pages: https://nanocontroller.github.io/HistoryOfComputing/

---

## 🐛 Troubleshooting

### Issue: 404 on GitHub Pages
**Fix:** Check that `base` in `vite.config.js` matches your repo name:
```javascript
base: '/HistoryOfComputing/'  // Must start and end with /
```

### Issue: Assets not loading
**Fix:** Make sure paths in HTML use relative paths:
```html
<script type="module" src="/src/main.js"></script>  ✅
<script type="module" src="src/main.js"></script>   ❌
```

### Issue: "gh-pages not found"
**Fix:** Install it:
```bash
npm install --save-dev gh-pages
```

---

## 📊 Deployment Process

```
Local Changes
    ↓
npm run build
    ↓
Creates dist/ folder
    ↓
gh-pages -d dist
    ↓
Pushes to gh-pages branch
    ↓
GitHub Pages serves site
    ↓
Live at: nanocontroller.github.io/HistoryOfComputing
```

---

## ✅ Success Checklist

After deployment:

- [ ] Visit the GitHub Pages URL
- [ ] Check all features work:
  - [ ] Timeline loads
  - [ ] Search works
  - [ ] Theme toggle works
  - [ ] Scroll indicator moves
  - [ ] Modal popups open
  - [ ] Images load
  - [ ] Mobile responsive
- [ ] Check browser console (no errors)
- [ ] Test on different browsers
- [ ] Test on mobile

---

## 🔄 Updating the Site

To deploy updates:

```bash
# 1. Make your changes
# 2. Test locally
npm run dev

# 3. Build and deploy
npm run deploy
```

Changes will be live in ~1-2 minutes!

---

## 📝 Notes

- GitHub Pages may take 1-2 minutes to update
- First deployment may take up to 10 minutes
- Clear browser cache if changes don't appear (Ctrl+Shift+R)
- Custom domains can be configured in GitHub settings

---

**Ready to deploy!** 🚀
