/**
 * History of Computing Timeline
 * Main application entry point
 */

import { state, setState } from './modules/state.js'
import { showLoadingState, showErrorState, renderData, createDecadeButton } from './modules/timeline.js'
import { initModal } from './modules/modal.js'
import { initializeSearch } from './modules/search.js'
import { initTheme } from './modules/theme.js'
import { initKeyboardNavigation } from './modules/keyboard.js'
import { initScrollIndicator } from './modules/scrollIndicator.js'

// DOM Elements
const DECADE_CONTAINER = document.getElementById('decades-container')
const DATA_CONTAINER = document.getElementById('data-container')

/**
 * Main initialization function
 */
async function init() {
  try {
    // Initialize theme first
    initTheme()
    
    // Show loading state
    showLoadingState(DATA_CONTAINER)
    
    // Fetch timeline data (relative path for GitHub Pages)
    const response = await fetch('./data.json')
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    setState('data', data)
    
    // Create decade navigation buttons
    const fragment = document.createDocumentFragment()
    data.forEach((item) => {
      if (item.year % 10 === 0) {
        const decadeButton = createDecadeButton(item.year)
        fragment.appendChild(decadeButton)
      }
    })
    DECADE_CONTAINER.appendChild(fragment)
    
    // Render timeline
    renderData(data, DATA_CONTAINER)
    
    // Initialize features
    initializeSearch()
    initModal()
    initKeyboardNavigation(DATA_CONTAINER)
    initScrollIndicator(DATA_CONTAINER, DECADE_CONTAINER)
    
    // Add loaded class for animations
    document.body.classList.add('loaded')
    
  } catch (error) {
    console.error('Error loading timeline data:', error)
    showErrorState(DATA_CONTAINER, error.message)
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
