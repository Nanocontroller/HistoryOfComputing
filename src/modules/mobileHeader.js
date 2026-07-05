/**
 * Mobile Header - Auto-hide on scroll
 */

let lastScrollTop = 0
let isHeaderHidden = false

/**
 * Initialize mobile header behavior
 */
export function initMobileHeader() {
  const header = document.querySelector('.header')
  if (!header) return
  
  // Only apply on mobile
  if (window.innerWidth > 768) return
  
  const dataContainer = document.getElementById('data-container')
  if (!dataContainer) return
  
  dataContainer.addEventListener('scroll', () => {
    handleScroll(header, dataContainer)
  })
  
  // Re-check on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      header.classList.remove('header-hidden')
      isHeaderHidden = false
    }
  })
}

/**
 * Handle scroll to show/hide header
 */
function handleScroll(header, container) {
  // For horizontal scroll on mobile, we check scrollLeft
  const scrollPosition = container.scrollLeft
  
  // Scrolling right - hide header
  if (scrollPosition > lastScrollTop && scrollPosition > 200 && !isHeaderHidden) {
    header.classList.add('header-hidden')
    isHeaderHidden = true
  } 
  // Scrolling left - show header
  else if (scrollPosition < lastScrollTop && scrollPosition < lastScrollTop - 100 && isHeaderHidden) {
    header.classList.remove('header-hidden')
    isHeaderHidden = false
  }
  
  lastScrollTop = scrollPosition
}
