// toggle 1 - desktop pages dropdown
const btn = document.getElementById('pages-btn')
const dropdown = document.getElementById('pages-dropdown')

btn.addEventListener('click', () => {
    dropdown.classList.toggle('hidden')
})

//toggle 2 - hamburger menu
const hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile-menu')

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})

//toggle 3 - mobile pages dropdown
const mobileBtn = document.getElementById('mobile-pages-btn')
const mobileDropdown = document.getElementById('mobile-pages-dropdown')

mobileBtn.addEventListener('click', () => {
    mobileDropdown.classList.toggle('hidden')
})