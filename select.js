const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  options = wrapper.querySelector(".options")
async function addDecade(selectedDecade) {
  let data = await fetch("data.json").then((res) => res.json())
  let decades = data.map((item, i) => {
    if (item.year % 10 === 0) {
      return item.year
    }
  })
  options.innerHTML = ""
  decades.forEach((decade) => {
    let isSelected = decade == selectedDecade ? "selected" : ""
    if (decade !== undefined) {
      let li = `<li  onclick="updateName(this)" class="${isSelected}"><a href=#section-${decade}>${decade}</a></li>`
      options.insertAdjacentHTML("beforebegin", li)
    }
  })
}
addDecade()

function updateName(selectedLi) {
  addDecade(selectedLi.innerText)
  wrapper.classList.remove("active")
  selectBtn.firstElementChild.innerText = selectedLi.innerText
}

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"))
