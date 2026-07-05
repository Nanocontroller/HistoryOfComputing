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
  
  // On mobile, listen to vertical scroll
  dataContainer.addEventListener('scroll', () => {
    handleScrollMobile(header, dataContainer)
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
 * Handle scroll for mobile (vertical scroll)
 */
function handleScrollMobile(header, container) {
  // Mobile uses vertical scroll (scrollTop)
  const scrollPosition = container.scrollTop
  
  // Scrolling down - hide header
  if (scrollPosition > lastScrollTop && scrollPosition > 100 && !isHeaderHidden) {
    header.classList.add('header-hidden')
    isHeaderHidden = true
  } 
  // Scrolling up - show header
  else if (scrollPosition < lastScrollTop - 50 && isHeaderHidden) {
    header.classList.remove('header-hidden')
    isHeaderHidden = false
  }
  
  lastScrollTop = scrollPosition
}
