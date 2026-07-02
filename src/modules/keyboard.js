/**
 * Keyboard navigation
 */

/**
 * Initialize keyboard navigation
 */
export function initKeyboardNavigation(container) {
  // Horizontal scroll with mouse wheel
  container.addEventListener('wheel', (evt) => {
    if (evt.deltaY !== 0) {
      evt.preventDefault()
      
      // Smooth scroll with easing
      const scrollAmount = evt.deltaY
      smoothScroll(container, scrollAmount, 300)
    }
  })

  // Arrow key navigation
  container.addEventListener('keydown', (evt) => {
    const scrollAmount = 300
    
    switch(evt.key) {
      case 'ArrowLeft':
        smoothScroll(container, -scrollAmount, 300)
        evt.preventDefault()
        break
      case 'ArrowRight':
        smoothScroll(container, scrollAmount, 300)
        evt.preventDefault()
        break
      case 'Home':
        smoothScroll(container, -container.scrollLeft, 500)
        evt.preventDefault()
        break
      case 'End':
        smoothScroll(container, container.scrollWidth - container.scrollLeft, 500)
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
