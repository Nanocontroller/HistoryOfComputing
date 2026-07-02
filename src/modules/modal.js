/**
 * Modal (popup) functionality
 */

import { state } from './state.js'

let popupContainer, popupData, overlay, closeButton

/**
 * Initialize modal elements
 */
export function initModal() {
  popupContainer = document.getElementById('popup-container')
  popupData = document.getElementById('popup-data')
  overlay = document.getElementById('overlay')
  closeButton = document.getElementById('close-popup')
  
  // Set up close button
  if (closeButton) {
    closeButton.addEventListener('click', hidePopup)
  }
  
  // Close on overlay click
  if (overlay) {
    overlay.addEventListener('click', hidePopup)
  }
  
  // Delegate read-more button clicks
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.read-more-btn')
    if (btn) {
      const index = parseInt(btn.getAttribute('data-index'))
      showPopup(index)
    }
  })
}

/**
 * Show popup modal with animation
 */
export function showPopup(index) {
  if (!state.popupData[index]) return
  
  popupData.innerHTML = state.popupData[index]
  
  // Add animation classes
  popupContainer.classList.add('modal-opening')
  overlay.classList.add('overlay-opening')
  
  overlay.style.display = 'block'
  popupContainer.style.display = 'block'
  popupContainer.setAttribute('role', 'dialog')
  popupContainer.setAttribute('aria-modal', 'true')
  document.body.style.overflow = 'hidden'
  
  // Remove opening class after animation
  setTimeout(() => {
    popupContainer.classList.remove('modal-opening')
    overlay.classList.remove('overlay-opening')
  }, 300)
  
  // Focus management
  setTimeout(() => {
    closeButton.focus()
  }, 100)
  
  // Trap focus in modal
  trapFocus(popupContainer)
}

/**
 * Hide popup modal with animation
 */
export function hidePopup() {
  // Add closing animation
  popupContainer.classList.add('modal-closing')
  overlay.classList.add('overlay-closing')
  
  setTimeout(() => {
    popupContainer.style.display = 'none'
    popupData.innerHTML = ''
    overlay.style.display = 'none'
    document.body.style.overflow = 'auto'
    popupContainer.removeAttribute('role')
    popupContainer.removeAttribute('aria-modal')
    
    // Remove closing classes
    popupContainer.classList.remove('modal-closing')
    overlay.classList.remove('overlay-closing')
  }, 300)
}

/**
 * Trap focus within modal for accessibility
 */
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstFocusable = focusableElements[0]
  const lastFocusable = focusableElements[focusableElements.length - 1]
  
  const handleKeyDown = (e) => {
    if (e.key !== 'Tab' && e.key !== 'Escape') return
    
    if (e.key === 'Escape') {
      hidePopup()
      return
    }
    
    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus()
        e.preventDefault()
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus()
        e.preventDefault()
      }
    }
  }
  
  element.addEventListener('keydown', handleKeyDown)
}

// Make hidePopup available globally for onclick handlers
window.hidePopup = hidePopup
