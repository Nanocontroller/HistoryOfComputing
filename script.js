// DOM Elements
const DECADE_CONTAINER = document.getElementById('decades-container')
const DATA_CONTAINER = document.getElementById('data-container')
const OVERLAY = document.getElementById('overlay')
const BASE_URL = 'https://raw.githubusercontent.com/Nanocontroller/HistoryOfComputing/main/images'

// State
const state = {
  data: [],
  popupData: [],
  currentFilter: ''
}

const handleOnload = async () => {
  try {
    // Show loading state
    showLoadingState()
    
    const response = await fetch('data.json')
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    state.data = data
    
    // Create decade buttons
    const fragment = document.createDocumentFragment()
    data.forEach((item, i) => {
      if (item.year % 10 === 0) {
        const decadeButton = createDecadeButton(item.year)
        fragment.appendChild(decadeButton)
      }
    })
    DECADE_CONTAINER.appendChild(fragment)
    
    // Render all data
    renderData(data)
    
    // Initialize search
    initializeSearch()
    
  } catch (error) {
    console.error('Error loading timeline data:', error)
    showErrorState(error.message)
  }
}

const showLoadingState = () => {
  DATA_CONTAINER.innerHTML = `
    <div class="loading-state" role="status" aria-live="polite">
      <p>Loading timeline data...</p>
    </div>
  `
}

const showErrorState = (message) => {
  DATA_CONTAINER.innerHTML = `
    <div class="error-state" role="alert">
      <h2>Error Loading Timeline</h2>
      <p>${escapeHtml(message)}</p>
      <button onclick="location.reload()">Retry</button>
    </div>
  `
}

const createDecadeButton = (year) => {
  const button = document.createElement('button')
  button.textContent = year
  button.className = 'decade-button'
  button.setAttribute('aria-label', `Jump to ${year}s`)
  button.onclick = () => {
    const section = document.getElementById(`section-${year}`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
      section.focus()
    }
  }
  return button
}

// Utility: Escape HTML to prevent XSS
const escapeHtml = (text) => {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

const renderData = (data) => {
  const fragment = document.createDocumentFragment()
  
  data.forEach((item, i) => {
    if (item.year % 10 === 0) {
      const decadeIntro = createDecadeIntro(item)
      fragment.appendChild(decadeIntro)
    }
    const yearData = createYearData(item, i)
    fragment.appendChild(yearData)
  })
  
  DATA_CONTAINER.innerHTML = ''
  DATA_CONTAINER.appendChild(fragment)
}

const createDecadeIntro = (item) => {
  const div = document.createElement('div')
  div.className = 'decade-intro'
  div.id = `section-${item.year}`
  div.setAttribute('tabindex', '-1')
  div.setAttribute('aria-label', `${item.decade} section`)
  
  div.innerHTML = `
    <div class='decade-intro-main'>
      <h1><span class="circle" aria-hidden="true"></span>${escapeHtml(item.year + 's')}</h1>
      ${generateImageAttributes(`/FeatureImages/${item.featureimg}`, 'decade-intro-img', `${item.decade} featured image`)}
    </div>
    <p class='decade-intro-p'>${escapeHtml(item.featuretext)}</p>
  `
  
  return div
}

const createYearData = (item, index) => {
  const div = document.createElement('div')
  div.className = 'decade-data'
  div.setAttribute('data-year', item.year)
  div.setAttribute('data-searchable', JSON.stringify({
    year: item.year,
    text: item.featuretext,
    people: [item.person1name, item.person2name].filter(Boolean).join(' '),
    events: [item.event1text, item.event2text].filter(Boolean).join(' ')
  }).toLowerCase())
  
  div.innerHTML = `
    <div class='decade-main'>
      <h2>${escapeHtml(String(item.year))}</h2>
      ${generateImageAttributes(`/FeatureImages/${item.featureimg}`, 'decade-img', `Year ${item.year} featured image`)}
      <p>${escapeHtml(item.featuretext)}</p>
      ${renderButtons(item, index)}
    </div>
  `
  
  return div
}
const renderDiv = (title) => {
  return `
  <div class='popup-box'>
    <h3>${escapeHtml(title)}</h3>
    <img class='popup-img' src='${BASE_URL}/event-icon.png' alt="" aria-hidden="true"/>
  </div>
  `
}

const renderPersonDiv = (title, image, subTitle) => {
  return `
  <div class='popup-box'>
    <div class="tittle">
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(subTitle)}</p>
    </div>
    ${generateImageAttributes(`/PeopleIcon/${image}`, 'popup-people-img', title)}
  </div>
  `
}

const renderButtons = (data, index) => {
  const sections = []
  
  // People section
  if (data.person1name !== '') {
    let peopleHtml = `<div class="popup-section people-section" role="region" aria-label="People">
      <h3>People</h3>
      ${renderPersonDiv(data.person1name, data.person1img, data.person1title)}`
    
    if (data.person2name !== '') {
      peopleHtml += renderPersonDiv(data.person2name, data.person2img, data.person2title)
    }
    peopleHtml += '</div>'
    sections.push(peopleHtml)
  }
  
  // Events section
  if (data.event1text !== '') {
    let eventsHtml = `<div class="popup-section event-section" role="region" aria-label="Events">
      <h3>Events</h3>
      ${renderDiv(data.event1text)}`
    
    if (data.event2text !== '') {
      eventsHtml += renderDiv(data.event2text)
    }
    eventsHtml += '</div>'
    sections.push(eventsHtml)
  }

  // Software section
  if (data.software1text !== '') {
    let softwareHtml = `<div class="popup-section event-section" role="region" aria-label="Software">
      <h3>Software</h3>
      ${renderDiv(data.software1text)}`
    
    if (data.software2text !== '') {
      softwareHtml += renderDiv(data.software2text)
    }
    softwareHtml += '</div>'
    sections.push(softwareHtml)
  }

  // Systems section
  if (data.system1text !== '') {
    let systemsHtml = `<div class="popup-section event-section" role="region" aria-label="Systems">
      <h3>Systems</h3>
      ${renderDiv(data.system1text)}`
    
    const systemTexts = [data.system2text, data.system3text, data.system4text, data.system5text]
    systemTexts.forEach(text => {
      if (text !== '') systemsHtml += renderDiv(text)
    })
    systemsHtml += '</div>'
    sections.push(systemsHtml)
  }
  
  if (sections.length > 0) {
    const popup = `<div><h1>${escapeHtml(String(data.year))}</h1>${sections.join('')}</div>`
    state.popupData[index] = popup
    
    return `<button 
      class="read-more-btn" 
      onclick="showPopup(${index})" 
      aria-label="Read more about ${data.year}"
      type="button">
      <span class="read-more-icon" aria-hidden="true"></span>
      <span>Read more</span>
    </button>`
  }
  
  return ''
}

const showPopup = (index) => {
  const popupContainer = document.getElementById('popup-container')
  const popupData = document.getElementById('popup-data')
  const closeButton = document.getElementById('close-popup')
  
  if (!state.popupData[index]) return
  
  popupData.innerHTML = state.popupData[index]
  OVERLAY.style.display = 'block'
  popupContainer.style.display = 'block'
  popupContainer.setAttribute('role', 'dialog')
  popupContainer.setAttribute('aria-modal', 'true')
  document.body.style.overflow = 'hidden'
  
  // Focus management
  closeButton.focus()
  
  // Trap focus in modal
  trapFocus(popupContainer)
}

const hidePopup = () => {
  const popupContainer = document.getElementById('popup-container')
  const popupData = document.getElementById('popup-data')
  
  popupContainer.style.display = 'none'
  popupData.innerHTML = ''
  OVERLAY.style.display = 'none'
  document.body.style.overflow = 'auto'
  popupContainer.removeAttribute('role')
  popupContainer.removeAttribute('aria-modal')
}

// Trap focus within modal for accessibility
const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstFocusable = focusableElements[0]
  const lastFocusable = focusableElements[focusableElements.length - 1]
  
  element.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return
    
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
  })
  
  // Close on Escape key
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hidePopup()
  })
}

// Horizontal scroll with mouse wheel
DATA_CONTAINER.addEventListener('wheel', (evt) => {
  if (evt.deltaY !== 0) {
    evt.preventDefault()
    DATA_CONTAINER.scrollLeft += evt.deltaY
  }
})

// Keyboard navigation
DATA_CONTAINER.addEventListener('keydown', (evt) => {
  const scrollAmount = 300
  
  switch(evt.key) {
    case 'ArrowLeft':
      DATA_CONTAINER.scrollLeft -= scrollAmount
      evt.preventDefault()
      break
    case 'ArrowRight':
      DATA_CONTAINER.scrollLeft += scrollAmount
      evt.preventDefault()
      break
    case 'Home':
      DATA_CONTAINER.scrollLeft = 0
      evt.preventDefault()
      break
    case 'End':
      DATA_CONTAINER.scrollLeft = DATA_CONTAINER.scrollWidth
      evt.preventDefault()
      break
  }
})

// Search functionality
const initializeSearch = () => {
  const searchContainer = document.createElement('div')
  searchContainer.className = 'search-container'
  searchContainer.innerHTML = `
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
  `
  
  const header = document.querySelector('.header')
  header.insertBefore(searchContainer, header.lastElementChild)
  
  const searchInput = document.getElementById('timeline-search')
  const clearBtn = document.getElementById('clear-search')
  const resultsDiv = document.getElementById('search-results')
  
  let debounceTimer
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer)
    const query = e.target.value.trim()
    
    clearBtn.style.display = query ? 'block' : 'none'
    
    debounceTimer = setTimeout(() => {
      performSearch(query, resultsDiv)
    }, 300)
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

const performSearch = (query, resultsDiv) => {
  const allItems = document.querySelectorAll('.decade-data')
  
  if (!query) {
    // Show all items
    allItems.forEach(item => {
      item.style.display = ''
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
      matchCount++
    } else {
      item.style.display = 'none'
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


// Overlay click to close popup
OVERLAY.addEventListener('click', hidePopup)

function generateImageAttributes(imageUrl, className, altText = '') {
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
