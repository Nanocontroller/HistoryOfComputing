# 🚀 Quick Start Guide

## Get Started in 3 Steps

### **Step 1: Install Dependencies**
```bash
cd HistoryOfComputing
npm install
```

### **Step 2: Run Development Server**
```bash
npm run dev
```
Opens at: http://localhost:3000

### **Step 3: Explore New Features!**
- Click ☀️/🌙 icon to toggle theme
- Search for "1990"
- Click decade buttons (smooth scroll!)
- Hover over timeline cards
- Open modals (smooth animations!)

---

## 🎨 What's New?

### ✨ **Theme Toggle**
Click the sun/moon icon in the header to switch between:
- 🌙 **Dark Mode** (default ANL colors)
- ☀️ **Light Mode** (professional light theme)

Your preference is saved!

### ✨ **Smooth Animations**
- Eased scrolling
- Card hover effects
- Modal fade-in/out
- Theme transitions

### ✨ **Card Design**
Timeline entries now have:
- Subtle elevation
- Hover lift effect
- Professional shadows

### ✨ **Modern Codebase**
- ES6 modules (organized code)
- Vite build system (fast!)
- Hot reload (auto-refresh on save)

---

## 📦 npm Scripts

```bash
npm run dev      # Development server (port 3000)
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

---

## 🎯 Quick Test Checklist

Open http://localhost:3000 and try:

- [ ] Click theme toggle (☀️/🌙) - switches instantly
- [ ] Refresh page - theme persists
- [ ] Search "Foster" - filters results
- [ ] Click "1980" decade button - smoothly scrolls
- [ ] Hover over timeline cards - lifts slightly
- [ ] Click "Read more" - modal fades in
- [ ] Press Escape - modal fades out
- [ ] Press arrow keys - scrolls smoothly
- [ ] Check console (F12) - no errors

**All working?** ✅ You're good!

---

## 🏗️ Project Structure

```
src/
├── main.js              ← App entry point
├── modules/             ← Feature modules
│   ├── state.js
│   ├── timeline.js
│   ├── modal.js
│   ├── search.js
│   ├── theme.js
│   └── keyboard.js
├── utils/               ← Utilities
│   └── helpers.js
└── styles/              ← Enhanced styles
    ├── theme.css
    └── components.css
```

---

## 🎨 Customize Theme

Edit `src/styles/theme.css`:

```css
:root {
  /* Change these colors */
  --bg-primary: #1d1651;      /* Background */
  --accent-primary: #118acb;  /* Accent color */
  --text-primary: #ffffff;    /* Text color */
}
```

---

## 📚 Full Documentation

- **[MODERNIZATION_COMPLETE.md](./MODERNIZATION_COMPLETE.md)** - Complete guide
- **[docs/](./docs/)** - All documentation
- **[README.md](./README.md)** - Main README

---

## 🆘 Troubleshooting

### **"npm: command not found"**
Install Node.js from: https://nodejs.org/ (v18+ LTS)

### **Port 3000 already in use**
Change port in `vite.config.js`:
```js
server: { port: 3001 }
```

### **Module errors**
```bash
rm -rf node_modules
npm install
```

### **Theme not working**
- Check browser console (F12)
- Try different browser
- Clear cache (Ctrl+Shift+Delete)

---

## 💡 Tips

### **Development**
- Changes auto-refresh (no manual reload needed!)
- Keep terminal open to see build errors
- Use browser DevTools for debugging

### **Production**
```bash
npm run build
# Upload dist/ folder to your server
```

---

## ✅ Success Checklist

Before committing:

- [ ] `npm install` works
- [ ] `npm run dev` starts server
- [ ] Theme toggle works
- [ ] Search works
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Accessibility maintained

---

**Ready to code!** 🎉

**Questions?** Check [MODERNIZATION_COMPLETE.md](./MODERNIZATION_COMPLETE.md)
