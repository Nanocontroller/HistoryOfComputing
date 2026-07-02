/**
 * Application state management
 */

export const state = {
  data: [],
  popupData: [],
  currentFilter: '',
  theme: localStorage.getItem('theme') || 'dark' // Default to dark theme
}

/**
 * Update state and notify listeners if needed
 */
export function setState(key, value) {
  state[key] = value
  
  // Persist theme preference
  if (key === 'theme') {
    localStorage.setItem('theme', value)
    document.documentElement.setAttribute('data-theme', value)
  }
}
