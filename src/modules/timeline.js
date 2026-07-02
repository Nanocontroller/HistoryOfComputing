/**
 * Timeline rendering module
 */

import { escapeHtml, generateImageAttributes, smoothScrollTo } from '../utils/helpers.js'
import { state } from './state.js'

/**
 * Show loading state
 */
export function showLoadingState(container) {
  container.innerHTML = `
    <div class="loading-state" role="status" aria-live="polite">
      <div class="loading-spinner"></div>
      <p>Loading timeline data...</p>
    </div>
  `
}

/**
 * Show error state
 */
export function showErrorState(container, message) {
  container.innerHTML = `
    <div class="error-state" role="alert">
      <h2>Error Loading Timeline</h2>
      <p>${escapeHtml(message)}</p>
      <button onclick="location.reload()">Retry</button>
    </div>
  `
}

/**
 * Create decade navigation button
 */
export function createDecadeButton(year) {
  const button = document.createElement('button')
  button.textContent = year
  button.className = 'decade-button'
  button.setAttribute('aria-label', `Jump to ${year}s`)
  button.onclick = () => {
    const section = document.getElementById(`section-${year}`)
    if (section) {
      smoothScrollTo(section)
    }
  }
  return button
}

/**
 * Render all timeline data
 */
export function renderData(data, container) {
  const fragment = document.createDocumentFragment()
  
  data.forEach((item, i) => {
    if (item.year % 10 === 0) {
      const decadeIntro = createDecadeIntro(item)
      fragment.appendChild(decadeIntro)
    }
    const yearData = createYearData(item, i)
    fragment.appendChild(yearData)
  })
  
  container.innerHTML = ''
  container.appendChild(fragment)
}

/**
 * Create decade introduction section
 */
function createDecadeIntro(item) {
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

/**
 * Create year data entry (card)
 */
function createYearData(item, index) {
  const div = document.createElement('div')
  div.className = 'decade-data timeline-card' // Added timeline-card class for styling
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

/**
 * Render "Read more" button if content exists
 */
function renderButtons(data, index) {
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
      data-index="${index}"
      aria-label="Read more about ${data.year}"
      type="button">
      <span class="read-more-icon" aria-hidden="true"></span>
      <span>Read more</span>
    </button>`
  }
  
  return ''
}

/**
 * Render event/system/software div
 */
function renderDiv(title) {
  return `
  <div class='popup-box'>
    <h3>${escapeHtml(title)}</h3>
  </div>
  `
}

/**
 * Render person profile div
 */
function renderPersonDiv(title, image, subTitle) {
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
