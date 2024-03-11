const search = document.querySelector('.nav-search')
const btn = document.querySelector('.nav-search-button')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})