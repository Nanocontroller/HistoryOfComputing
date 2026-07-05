# 🐛 Known Issues & Limitations

**Last Updated:** December 2024  
**Status:** Non-Critical Issues Only

---

## 🟡 **Minor Issues** (Low Priority)

### **1. Image Zoom Hover**
**Issue:** Image zoom on hover may not work consistently  
**Affected:** Desktop timeline images  
**Cause:** `.zoom-image` class may not be applied to all images  
**Impact:** Minor visual enhancement missing  
**Workaround:** None needed, images still display  
**Fix Difficulty:** Easy - check `generateImageAttributes()` in helpers.js

---

### **2. Search Results Counter**
**Issue:** Results counter doesn't update smoothly during fast typing  
**Affected:** Search functionality  
**Cause:** No debounce on counter update  
**Impact:** Visual glitch, doesn't affect functionality  
**Workaround:** Type slower or wait for final count  
**Fix Difficulty:** Easy - add debounce to counter

---

### **3. Theme Transition Speed**
**Issue:** Theme switch could be slightly smoother  
**Affected:** Dark/Light toggle  
**Cause:** Fixed 0.3s transition  
**Impact:** Minor, still looks professional  
**Workaround:** None needed  
**Fix Difficulty:** Easy - adjust transition timing

---

### **4. Scroll Indicator on Resize**
**Issue:** Indicator position may jump on window resize  
**Affected:** Desktop scroll indicator  
**Cause:** Recalculation on resize event  
**Impact:** Brief visual glitch during resize  
**Workaround:** None needed, rare occurrence  
**Fix Difficulty:** Medium - smooth transition on resize

---

## 🔵 **Limitations** (By Design)

### **1. No Image Theme Adaptation**
**What:** Images don't change colors with theme  
**Why:** Would require image processing/filters  
**Impact:** Images may look slightly off in light theme  
**Future:** Could add CSS filters for light mode  
**Priority:** Low

---

### **2. No Back-to-Top Button**
**What:** No quick way to return to start  
**Why:** Desktop has horizontal scroll, mobile is short  
**Impact:** Minor inconvenience for long scrolls  
**Future:** Could add floating button  
**Priority:** Low

---

### **3. No Touch Gestures**
**What:** No swipe navigation on mobile  
**Why:** Standard scroll works fine  
**Impact:** None, vertical scroll is natural  
**Future:** Could add swipe for decade jumping  
**Priority:** Very Low

---

### **4. No Keyboard Shortcuts for Search**
**What:** No Ctrl+F or / to open search  
**Why:** Not implemented yet  
**Impact:** Minor UX enhancement missing  
**Future:** Easy to add  
**Priority:** Medium

---

### **5. No Offline Support**
**What:** Requires internet connection  
**Why:** No service worker or caching  
**Impact:** Doesn't work offline  
**Future:** Could add PWA support  
**Priority:** Very Low

---

### **6. Fixed Decade Intervals**
**What:** Only shows decades (1940, 1950, etc.)  
**Why:** Data structured by decades  
**Impact:** Can't add years between decades  
**Future:** Would require data restructure  
**Priority:** Low (not needed)

---

## ⚠️ **Browser Compatibility**

### **Fully Supported:**
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android)

### **Partially Supported:**
- ⚠️ Internet Explorer 11 (CSS variables don't work)
- ⚠️ Old Safari (< iOS 12)

### **Not Supported:**
- ❌ Internet Explorer 10 and below
- ❌ Very old mobile browsers

**Note:** GitHub Pages serves modern browsers, so this is acceptable.

---

## 🔍 **Edge Cases**

### **1. Very Wide Screens (> 2560px)**
**Issue:** Timeline may look stretched  
**Impact:** Rare, affects large displays  
**Fix:** Could add max-width constraint

---

### **2. Very Narrow Screens (< 320px)**
**Issue:** Layout may break  
**Impact:** Very rare, old devices only  
**Fix:** Not worth fixing, device too small

---

### **3. Many Search Results (> 50)**
**Issue:** Filtering may feel slow  
**Impact:** Rare, most searches return < 20 results  
**Fix:** Virtual scrolling (overkill for this project)

---

### **4. Rapid Theme Toggling**
**Issue:** Theme transition can stack  
**Impact:** Visual glitch if toggled rapidly  
**Fix:** Debounce theme toggle

---

## 🚫 **Won't Fix** (Intentional)

### **1. Horizontal Scroll on Mobile**
**Why:** Changed to vertical for better UX  
**Status:** Intentionally removed

---

### **2. Always-Visible Search**
**Why:** Made collapsible per user preference  
**Status:** Feature, not bug

---

### **3. Large Mobile Header**
**Why:** Reduced to compact size  
**Status:** Fixed, was requested

---

## 📊 **Issue Priority Matrix**

| Issue | Priority | Difficulty | Impact | Status |
|-------|----------|------------|--------|--------|
| Image zoom hover | Low | Easy | Minor | Open |
| Search counter | Low | Easy | Minor | Open |
| Theme transition | Very Low | Easy | Minimal | Open |
| Scroll indicator resize | Low | Medium | Minor | Open |
| No back-to-top | Low | Easy | Minor | Planned |
| No keyboard shortcuts | Medium | Easy | Minor | Planned |
| No offline support | Very Low | Hard | Low | Future |
| IE compatibility | Won't Fix | N/A | N/A | Closed |

---

## 🎯 **How to Report Issues**

If you find a new issue:

1. **Check if it's listed here**
2. **Test in incognito mode** (rule out cache)
3. **Test on different browser** (rule out browser-specific)
4. **Check browser console** (F12) for errors
5. **Note:**
   - What you expected
   - What actually happened
   - Browser & device
   - Steps to reproduce
6. **Document with screenshot** if visual

---

## ✅ **Recently Fixed** (Phase 2)

- ✅ Trackpad scrolling lag → Fixed
- ✅ Theme colors unreadable → Fixed
- ✅ Mobile horizontal scroll → Changed to vertical
- ✅ Mobile header too large → Reduced size
- ✅ Dropdown duplicates → Fixed
- ✅ Scroll indicator jumping → Smoothed
- ✅ Deployment 404 errors → Fixed paths
- ✅ Arrow keys not working → Made global
- ✅ Search too prominent → Made collapsible

---

## 🎊 **Overall Health: Excellent**

- No critical bugs
- All major features working
- Good browser support
- Mobile experience solid
- Performance good
- Accessibility maintained

**The project is in great shape!** 🚀
