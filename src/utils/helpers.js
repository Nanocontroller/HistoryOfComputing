/**
 * Utility functions
 */

// Use relative path for deployment
export const BASE_URL = './images'

/**
 * Escape HTML to prevent XSS attacks
 * @param {string} text - Text to escape
 * @returns {string} - Escaped HTML
 */
export function escapeHtml(text) {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

/**
 * Generate responsive image attributes with srcset
 * @param {string} imageUrl - Image URL path
 * @param {string} className - CSS class name
 * @param {string} altText - Alt text for accessibility
 * @returns {string} - HTML string for image
 */
export function generateImageAttributes(imageUrl, className, altText = '') {
  const removeExtension = (filename) => filename.replace(/\.[^.]+$/, '')
  const baseImageUrl = BASE_URL + removeExtension(imageUrl)
  const fullImageUrl = BASE_URL + imageUrl
  
  return `
  <div class='image-container'>
    <picture>
      <source media="(max-width:480px)" srcset="${baseImageUrl}@0.25x.jpg">
      <source media="(max-width:992px)" srcset="${baseImageUrl}@0.5x.jpg">
      <img class="${className} zoom-image" src="${fullImageUrl}" alt="${escapeHtml(altText)}" loading="lazy">
    </picture>
  </div>
  `
}

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Smooth scroll to element with offset
 * @param {HTMLElement} element - Element to scroll to
 * @param {string} behavior - Scroll behavior
 */
export function smoothScrollTo(element, behavior = 'smooth') {
  if (!element) return
  
  element.scrollIntoView({ 
    behavior, 
    block: 'start', 
    inline: 'start' 
  })
  
  // Add focus for accessibility
  element.focus()
}
