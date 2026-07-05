/**
 * Search functionality
 */

import { debounce } from '../utils/helpers.js'

/**
 * Initialize search functionality
 */
export function initializeSearch() {
  const searchContainer = document.createElement('div')
  searchContainer.className = 'search-container collapsed'
  searchContainer.innerHTML = `
    <button 
      id="search-toggle" 
      class="search-toggle-btn" 
      aria-label="Toggle search"
      type="button"
      title="Search timeline"
    >
      🔍
    </button>
    <div class="search-expandable">
      <label for="timeline-search" class="search-label">Search Timeline</label>
      <div class="search-input-wrapper">
        <input 
          type="text" 
          id="timeline-search" 
          class="search-input" 
          placeholder="Search by year, person, event..."
          aria-label="Search timeline by year, person, or event"
        />
        <button 
          id="clear-search" 
          class="clear-search-btn" 
          aria-label="Clear search"
          style="display: none;"
          type="button"
        >
          ✕
        </button>
      </div>
      <div id="search-results" class="search-results" aria-live="polite"></div>
    </div>
  `
  
  const header = document.querySelector('.header')
  header.insertBefore(searchContainer, header.lastElementChild)
  
  const toggleBtn = document.getElementById('search-toggle')
  const searchInput = document.getElementById('timeline-search')
  const clearBtn = document.getElementById('clear-search')
  const resultsDiv = document.getElementById('search-results')
  
  // Toggle search visibility
  toggleBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('collapsed')
    if (!searchContainer.classList.contains('collapsed')) {
      searchInput.focus()
    }
  })
  
  // Debounced search
  const debouncedSearch = debounce((query) => {
    performSearch(query, resultsDiv)
  }, 300)
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim()
    clearBtn.style.display = query ? 'block' : 'none'
    debouncedSearch(query)
  })
  
  clearBtn.addEventListener('click', () => {
    searchInput.value = ''
    clearBtn.style.display = 'none'
    performSearch('', resultsDiv)
    searchInput.focus()
  })
  
  // Clear search on Escape
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchInput.value = ''
      clearBtn.style.display = 'none'
      performSearch('', resultsDiv)
    }
  })
}

/**
 * Perform search and filter results
 */
function performSearch(query, resultsDiv) {
  const allItems = document.querySelectorAll('.decade-data')
  
  if (!query) {
    // Show all items
    allItems.forEach(item => {
      item.style.display = ''
      item.classList.remove('search-result')
    })
    resultsDiv.textContent = ''
    return
  }
  
  const searchTerm = query.toLowerCase()
  let matchCount = 0
  
  allItems.forEach(item => {
    const searchableData = item.getAttribute('data-searchable')
    
    if (searchableData && searchableData.includes(searchTerm)) {
      item.style.display = ''
      item.classList.add('search-result') // Add class for animation
      matchCount++
    } else {
      item.style.display = 'none'
      item.classList.remove('search-result')
    }
  })
  
  // Update results count
  if (matchCount === 0) {
    resultsDiv.textContent = 'No results found'
    resultsDiv.className = 'search-results no-results'
  } else {
    resultsDiv.textContent = `${matchCount} result${matchCount !== 1 ? 's' : ''} found`
    resultsDiv.className = 'search-results has-results'
  }
}
