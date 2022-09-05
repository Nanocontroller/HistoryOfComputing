const DECADE_CONTAINER = document.getElementById('decades-container')
const MOBILE_DA = document.getElementById('decades-container')
const DATA_CONTAINER = document.getElementById('data-container')
const OVERLAY = document.getElementById('overlay')

const popupData = []

const handleOnload = async () => {
  let data = await fetch('data.json').then((res) => res.json())
  data.map((item, i) => {
    let LetItem = item;
    // console.log(LetItem)

    if (item.year % 10 === 0) {
      let decadeButton = document.createElement('button')

      decadeButton.innerHTML = item.year
      decadeButton.className = 'decade-button'
      decadeButton.onclick = () =>  document.getElementById(`section-${item.year}`).scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      DECADE_CONTAINER.appendChild(decadeButton)
    }
    createData(item, i)

  })
}

const handleDecadeClick = (decade) => {
// console.log(decade.target.item)

}

const createData = (item, i) => {
   if (item.year % 10 === 0) {
    let decateIntro = `
    <div class='decade-intro' id=section-${item.year}>
      <div class='decade-intro-main' >
        <h1><span class="circle"></span>${item.year + 's'}</h1>
        <img class='decade-intro-img' src='https://raw.github.com/holihollyday/image_HistoryofComputing/main/${item.featureimg}'/>
      </div>
      <p class='decade-intro-p'>${item.featuretext}</p>
    </div>
    `
    DATA_CONTAINER.innerHTML += decateIntro
  }
  let decadeYearData = `
    <div class='decade-data'>
      <div class='decade-main'>
      <h2>${item.year}</h2>
      <img class='decade-img' src='https://raw.github.com/holihollyday/image_HistoryofComputing/main/${item.featureimg}'/>
      <p>${item.featuretext}</p>
      ${renderButtons(item, i)}
      </div>
    </div>
  `
  DATA_CONTAINER.innerHTML += decadeYearData
}
{/* <img class='popup-img' src='https://raw.github.com/holihollyday/image_HistoryofComputing/main/${image}'/> */}
const renderDiv = (title) => {
  return `
  <div class='popup-box'>
    <h3>${title}</h3>
    <img class='popup-img' src='https://raw.githubusercontent.com/Nanocontroller/HistoryOfComputing/main/images/event-icon.png'/>
  </div>
  `
}

const renderPersonDiv = (title, image, subTitle) => {
  return `
  <div class='popup-box '>
    <div class="tittle">
      <h2>${title}</h2>
      <p>${subTitle}</p>
    </div>
    <img class='popup-people-img blend' src='https://raw.github.com/holihollyday/image_HistoryofComputing/main/${image}'/>
  </div>
  `
}

const renderButtons = (data, i) => {
  // console.log(data.year)
  let popup = `<div>
  <h1>${data.year}</h1>
  `
  if (data.person1name !== '') {
    popup += `
    <div class="popup-section people-section">
    <h3>People</h3>
    ${renderPersonDiv(data.person1name, data.person1img, data.person1title)}
    ${data.person2name !== '' ? renderPersonDiv(data.person2name, data.person2img, data.person2title) : ''}
  </div>
    `
  }
  if (data.event1 !== '') {
    popup += `
    <div class="popup-section event-section">
      <h3>Events</h3>
      ${renderDiv(data.event1text)}
      ${data.event2text !== '' ? renderDiv(data.event2text) : ''}
    </div>
    `
  }

  if (data.software1text !== '') {
    popup += `
    <div class="popup-section event-section">
    <h3>Software</h3>
    ${renderDiv(data.software1text)}
    ${data.software2text !== '' ? renderDiv(data.software2text) : ''}
  </div>
    `
  }

  if (data.system1text !== '') {
    popup += `
    <div class="popup-section event-section">
    <h3>System</h3>
    ${renderDiv(data.system1text)}
    ${data.system2text !== '' ? renderDiv(data.system2text) : ''}
    ${data.system3text !== '' ? renderDiv(data.system3text) : ''}
    ${data.system4text !== '' ? renderDiv(data.system4text) : ''}
    ${data.system5text !== '' ? renderDiv(data.system5text) : ''}
  </div>
    `
  }
 
  popup += '</div>'
  popupData.push(popup)
  if (data.event1text !== '' || data.software1text !== '' || data.system1text !== '' || data.person1name !== '') {
    return `<div onclick='showPopup(${i})' class="read-more-btn"><span class="read-more-icon"></span>Read more</div>`
  } else {
    return ''
  }
}

const showPopup = (i) => {
  let popupContainer = document.getElementById('popup-container');
  document.getElementById('popup-data').innerHTML = popupData[i];
  OVERLAY.style.display = 'block'
  popupContainer.style.display = 'block'
  document.querySelector('body').style.overflow="hidden"
}

const hidePopup = () => {
  let popupContainer = document.getElementById('popup-container');
  popupContainer.style.display = 'none'
  document.getElementById('popup-data').innerHTML = ''
  OVERLAY.style.display = 'none'
  document.querySelector('body').style.overflow="auto"


}

DATA_CONTAINER.addEventListener('wheel', (evt) => {
  evt.preventDefault()
  DATA_CONTAINER.scrollLeft += evt.deltaY
})
