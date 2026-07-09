/**
 * Theme toggle functionality (Dark/Light mode)
 */

import { state, setState } from './state.js'

/**
 * Initialize theme system with system preference detection
 */
export function initTheme() {
  // Check for saved theme, otherwise use system preference
  if (!localStorage.getItem('timeline-theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setState('theme', prefersDark ? 'dark' : 'light', false)
  }
  
  // Apply theme
  document.documentElement.setAttribute('data-theme', state.theme)
  
  // Create theme toggle button
  createThemeToggle()
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('timeline-theme')) {
      const newTheme = e.matches ? 'dark' : 'light'
      setState('theme', newTheme)
      document.documentElement.setAttribute('data-theme', newTheme)
      const toggle = document.getElementById('theme-toggle')
      if (toggle) updateThemeIcon(toggle)
    }
  })
}

/**
 * Create theme toggle button
 */
function createThemeToggle() {
  const themeToggle = document.createElement('button')
  themeToggle.id = 'theme-toggle'
  themeToggle.className = 'theme-toggle'
  themeToggle.setAttribute('aria-label', 'Toggle theme')
  themeToggle.setAttribute('type', 'button')
  themeToggle.title = state.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  
  // Set initial icon
  updateThemeIcon(themeToggle)
  
  // Add click handler
  themeToggle.addEventListener('click', toggleTheme)
  
  // Insert directly into body (fixed position via CSS)
  document.body.appendChild(themeToggle)
}

/**
 * Toggle between dark and light theme
 */
function toggleTheme() {
  const newTheme = state.theme === 'dark' ? 'light' : 'dark'
  setState('theme', newTheme)
  
  const toggle = document.getElementById('theme-toggle')
  updateThemeIcon(toggle)
  toggle.title = newTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  
  // Add transition class to body for smooth theme switch
  document.body.classList.add('theme-transitioning')
  setTimeout(() => {
    document.body.classList.remove('theme-transitioning')
  }, 300)
}

/**
 * Update theme toggle icon
 */
function updateThemeIcon(button) {
  // Simple sun/moon icons using unicode
  button.innerHTML = state.theme === 'dark' 
    ? '<span aria-hidden="true">☀️</span><span class="sr-only">Light mode</span>' 
    : '<span aria-hidden="true">🌙</span><span class="sr-only">Dark mode</span>'
}
