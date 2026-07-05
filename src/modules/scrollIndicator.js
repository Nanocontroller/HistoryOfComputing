/**
 * Scroll Progress Indicator
 * Shows current position in the timeline
 */

/**
 * Initialize scroll progress indicator
 */
export function initScrollIndicator(dataContainer, decadeContainer) {
  if (!dataContainer || !decadeContainer) return
  
  // Update indicator on scroll
  dataContainer.addEventListener('scroll', () => {
    updateIndicatorPosition(dataContainer, decadeContainer)
  })
  
  // Initial position
  updateIndicatorPosition(dataContainer, decadeContainer)
  
  // Update on window resize
  window.addEventListener('resize', () => {
    updateIndicatorPosition(dataContainer, decadeContainer)
  })
}

/**
 * Calculate and update indicator position based on scroll
 * Uses smooth interpolation between decades
 */
function updateIndicatorPosition(dataContainer, decadeContainer) {
  const scrollLeft = dataContainer.scrollLeft
  const scrollWidth = dataContainer.scrollWidth
  const containerWidth = dataContainer.clientWidth
  
  // Calculate scroll progress (0 to 1)
  const maxScroll = scrollWidth - containerWidth
  const scrollProgress = maxScroll > 0 ? scrollLeft / maxScroll : 0
  
  // Get decade buttons
  const decadeButtons = decadeContainer.querySelectorAll('.decade-button')
  if (decadeButtons.length === 0) return
  
  // Simple approach: map scroll progress to decade button positions
  const decadeWidth = decadeContainer.clientWidth
  const indicatorWidth = 50
  
  // Calculate smooth position based on scroll percentage
  const indicatorPosition = scrollProgress * (decadeWidth - indicatorWidth)
  
  // Update CSS custom property with smooth transition
  decadeContainer.style.setProperty('--indicator-position', `${indicatorPosition}px`)
}
