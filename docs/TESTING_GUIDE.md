# Testing Guide

## 🧪 How to Test the Improvements

This guide will help you test all the new features and improvements made to the History of Computing timeline.

---

## 🚀 Quick Start

### Option 1: Local Testing
1. Open `index.html` in a modern browser
2. Or run a local server:
   ```bash
   python3 -m http.server 8000
   # Then visit: http://localhost:8000
   ```

### Option 2: Live Server (VS Code)
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

---

## ✅ Test Checklist

### 1. Loading & Error Handling

#### Test: Normal Loading
- [ ] Page shows "Loading timeline data..." initially
- [ ] Timeline renders after loading completes
- [ ] All decade buttons appear
- [ ] All year entries display correctly

#### Test: Error Handling
1. Rename `data.json` to `data-backup.json`
2. Reload page
3. Verify:
   - [ ] Error message appears
   - [ ] "Retry" button is visible
   - [ ] Clicking retry attempts to reload
4. Rename file back to `data.json`

---

### 2. Search Functionality

#### Test: Basic Search
- [ ] Search box appears below the main heading
- [ ] Placeholder text is visible
- [ ] Typing shows results in real-time

#### Test: Search Features
1. Type "1985" 
   - [ ] Shows only 1985 entries
   - [ ] Results counter shows "X results found"
2. Type "Foster"
   - [ ] Shows entries mentioning Ian Foster
   - [ ] Counter updates correctly
3. Type "MPI"
   - [ ] Shows MPI-related entries
   - [ ] Other entries are hidden
4. Click "✕" button
   - [ ] Search clears
   - [ ] All entries reappear
   - [ ] Focus returns to search input
5. Type gibberish (e.g., "xyzabc123")
   - [ ] Shows "No results found" in red
   - [ ] All entries are hidden

#### Test: Search Keyboard
1. Focus search box
2. Type a query
3. Press `Escape`
   - [ ] Search clears
   - [ ] Results reset

---

### 3. Keyboard Navigation

#### Test: Timeline Navigation
1. Click anywhere on the timeline (to focus it)
2. Test these keys:
   - `→` (Right Arrow)
     - [ ] Timeline scrolls right
   - `←` (Left Arrow)
     - [ ] Timeline scrolls left
   - `Home`
     - [ ] Timeline jumps to start
   - `End`
     - [ ] Timeline jumps to end

#### Test: Tab Navigation
1. Press `Tab` repeatedly
2. Verify tab order:
   - [ ] Skip link (appears on focus)
   - [ ] Search input
   - [ ] Clear search button (if search has text)
   - [ ] Decade buttons (1940, 1950, 1960...)
   - [ ] "Read more" buttons
   - [ ] Timeline container

#### Test: Skip Link
1. Reload page
2. Press `Tab` once
3. Verify:
   - [ ] "Skip to timeline" link appears at top
   - [ ] Pressing `Enter` jumps to timeline
   - [ ] Link disappears when not focused

---

### 4. Accessibility

#### Test: Focus Indicators
- [ ] All buttons show blue outline when focused
- [ ] Outline has proper offset (4px gap)
- [ ] Focus is visible on all interactive elements

#### Test: Modal Accessibility
1. Click any "Read more" button
2. Verify modal opens with:
   - [ ] Close button receives focus
   - [ ] Pressing `Tab` cycles through modal content only
   - [ ] Pressing `Shift+Tab` cycles backwards
   - [ ] Cannot tab to background elements
3. Press `Escape`
   - [ ] Modal closes
   - [ ] Focus returns to trigger button
4. Click overlay (dark background)
   - [ ] Modal closes

#### Test: Screen Reader (Optional)
If you have a screen reader enabled:
- [ ] Search input announces "Search timeline by year, person, or event"
- [ ] Decade buttons announce "Jump to 1940s", etc.
- [ ] "Read more" buttons announce "Read more about [year]"
- [ ] Modal announces as dialog
- [ ] Loading state announces "Loading timeline data"

---

### 5. Visual & Design

#### Test: Search UI
- [ ] Search box has subtle background
- [ ] Blue border on search input
- [ ] Border changes to cyan on focus
- [ ] Clear button appears when typing
- [ ] Clear button has hover effect
- [ ] Results counter is visible and readable

#### Test: Button Styles
- [ ] Close button (✕ close) has border
- [ ] Hover changes background color
- [ ] "Read more" buttons have hover opacity
- [ ] Decade buttons change color on hover

#### Test: Loading States
- [ ] Loading message is centered and visible
- [ ] Error message is red and clear
- [ ] Retry button is styled consistently

---

### 6. Responsive Design

#### Test: Desktop (> 768px)
- [ ] Decade buttons visible at top
- [ ] Mobile dropdown hidden
- [ ] Search box max-width 600px
- [ ] Timeline scrolls horizontally

#### Test: Mobile (< 768px)
1. Resize browser to mobile width or use DevTools
2. Verify:
   - [ ] Decade buttons hidden
   - [ ] Mobile dropdown appears
   - [ ] Search box full width
   - [ ] Timeline scrolls vertically
   - [ ] All content readable

---

### 7. Modal Popups

#### Test: Opening Modals
1. Click "Read more" on 1982 (or any year with content)
2. Verify:
   - [ ] Modal opens centered
   - [ ] Overlay darkens background
   - [ ] Body scroll disabled
   - [ ] Content displays correctly
   - [ ] Close button visible

#### Test: Modal Sections
Check modal contains proper sections:
- [ ] **People** section (if applicable)
  - [ ] Person name
  - [ ] Person title
  - [ ] Person image
- [ ] **Events** section (if applicable)
  - [ ] Event descriptions
  - [ ] Event icon
- [ ] **Software** section (if applicable)
- [ ] **Systems** section (if applicable)

#### Test: Closing Modals
Try all methods:
- [ ] Click "✕ close" button
- [ ] Click overlay (dark background)
- [ ] Press `Escape` key
- All should close the modal properly

---

### 8. Performance

#### Test: Initial Load
- [ ] Page loads in < 2 seconds (normal connection)
- [ ] No JavaScript errors in console (F12 → Console)
- [ ] No failed network requests

#### Test: Smooth Scrolling
- [ ] Horizontal scroll is smooth
- [ ] No lag when scrolling with mouse wheel
- [ ] Arrow key scrolling is smooth
- [ ] Decade button clicks scroll smoothly

#### Test: Search Performance
- [ ] Search responds instantly (no lag)
- [ ] No lag when clearing search
- [ ] Results update smoothly

---

### 9. Browser Compatibility

Test in multiple browsers:

#### Chrome/Edge
- [ ] All features work
- [ ] No console errors
- [ ] Custom scrollbar appears

#### Firefox
- [ ] All features work
- [ ] No console errors
- [ ] Custom scrollbar appears

#### Safari (Desktop)
- [ ] All features work
- [ ] No console errors
- [ ] Images load correctly

#### Mobile Safari (iOS)
- [ ] All features work
- [ ] Touch scrolling smooth
- [ ] Modal works on mobile

#### Chrome Mobile (Android)
- [ ] All features work
- [ ] Touch scrolling smooth
- [ ] Modal works on mobile

---

### 10. Security

#### Test: XSS Prevention
1. Open browser console
2. Try to inject HTML:
   ```javascript
   // This should NOT execute a script
   document.getElementById('timeline-search').value = '<script>alert("XSS")</script>'
   document.getElementById('timeline-search').dispatchEvent(new Event('input'))
   ```
3. Verify:
   - [ ] No alert pops up
   - [ ] Script tag is displayed as text (escaped)

---

## 🐛 Bug Report Template

If you find issues, use this template:

```
**Issue:** [Brief description]

**Steps to Reproduce:**
1. 
2. 
3. 

**Expected Behavior:**


**Actual Behavior:**


**Browser/Device:**
- Browser: [Chrome 120, Firefox 121, etc.]
- OS: [Windows 11, macOS 14, iOS 17, etc.]
- Screen size: [1920x1080, mobile, etc.]

**Screenshots:** (if applicable)
```

---

## ✅ All Tests Passed?

If all tests pass:
1. You're ready to commit the changes!
2. Celebrate! 🎉

If some tests fail:
1. Note which tests failed
2. Check the console for errors
3. Review the relevant code sections
4. Fix and retest

---

## 📝 Test Results Log

Date: ___________

| Test Category | Pass/Fail | Notes |
|---------------|-----------|-------|
| Loading & Error Handling | ⬜ | |
| Search Functionality | ⬜ | |
| Keyboard Navigation | ⬜ | |
| Accessibility | ⬜ | |
| Visual & Design | ⬜ | |
| Responsive Design | ⬜ | |
| Modal Popups | ⬜ | |
| Performance | ⬜ | |
| Browser Compatibility | ⬜ | |
| Security | ⬜ | |

Tester: ___________

---

## 🎯 Quick Smoke Test (5 minutes)

Don't have time for full testing? Run this quick test:

1. ✅ Page loads without errors
2. ✅ Search for "1990" - filters correctly
3. ✅ Press Escape - search clears
4. ✅ Click a decade button - scrolls to section
5. ✅ Click "Read more" - modal opens
6. ✅ Press Escape - modal closes
7. ✅ Press arrow keys - timeline scrolls
8. ✅ Resize to mobile - dropdown appears

If all pass → You're good to go! ✅
