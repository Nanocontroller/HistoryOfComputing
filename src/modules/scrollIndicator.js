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
  
  // Get all decade sections in the timeline
  const decadeSections = dataContainer.querySelectorAll('[id^="section-"]')
  if (decadeSections.length === 0) return
  
  // Find which decade section is currently most visible
  let currentDecadeIndex = 0
  let minDistance = Infinity
  
  decadeSections.forEach((section, index) => {
    const sectionLeft = section.offsetLeft
    const distance = Math.abs(sectionLeft - scrollLeft)
    if (distance < minDistance) {
      minDistance = distance
      currentDecadeIndex = index
    }
  })
  
  // Get the corresponding decade button position
  if (decadeButtons[currentDecadeIndex]) {
    const button = decadeButtons[currentDecadeIndex]
    const buttonLeft = button.offsetLeft
    const buttonWidth = button.offsetWidth
    
    // Center the indicator under the button
    const indicatorWidth = 50 // Match CSS width
    const indicatorPosition = buttonLeft + (buttonWidth / 2) - (indicatorWidth / 2)
    
    // Update CSS custom property
    decadeContainer.style.setProperty('--indicator-position', `${indicatorPosition}px`)
  }
}
