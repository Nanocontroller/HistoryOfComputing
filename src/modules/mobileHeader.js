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
  const scrollTop = container.scrollTop || container.scrollLeft
  
  // Scrolling down - hide header
  if (scrollTop > lastScrollTop && scrollTop > 100 && !isHeaderHidden) {
    header.classList.add('header-hidden')
    isHeaderHidden = true
  } 
  // Scrolling up - show header
  else if (scrollTop < lastScrollTop && isHeaderHidden) {
    header.classList.remove('header-hidden')
    isHeaderHidden = false
  }
  
  lastScrollTop = scrollTop
}
