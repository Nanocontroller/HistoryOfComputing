 /**
 * Keyboard navigation
 */

/**
 * Initialize keyboard navigation
 */
export function initKeyboardNavigation(container) {
  // Horizontal scroll with mouse wheel (trackpad friendly)
  container.addEventListener('wheel', (evt) => {
    if (evt.deltaY !== 0) {
      evt.preventDefault()
      // Direct scroll for better trackpad response
      container.scrollLeft += evt.deltaY
    }
  })

  // Arrow key navigation (requires focus)
  document.addEventListener('keydown', (evt) => {
    // Only if not typing in an input
    if (evt.target.tagName === 'INPUT' || evt.target.tagName === 'TEXTAREA') return
    
    const scrollAmount = 300
    
    switch(evt.key) {
      case 'ArrowLeft':
        container.scrollLeft -= scrollAmount
        evt.preventDefault()
        break
      case 'ArrowRight':
        container.scrollLeft += scrollAmount
        evt.preventDefault()
        break
      case 'Home':
        container.scrollLeft = 0
        evt.preventDefault()
        break
      case 'End':
        container.scrollLeft = container.scrollWidth
        evt.preventDefault()
        break
    }
  })
}

/**
 * Smooth scroll with easing animation
 */
function smoothScroll(element, amount, duration) {
  const start = element.scrollLeft
  const target = start + amount
  const startTime = performance.now()
  
  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  }
  
  function animate(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeInOutQuad(progress)
    
    element.scrollLeft = start + (amount * eased)
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  
  requestAnimationFrame(animate)
}
