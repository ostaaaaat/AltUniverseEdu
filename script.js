let startButton = document.getElementById('info')
let menuBtn = document.querySelector('.bi-list')
let menuList = document.querySelector('.menu-list')

menuBtn.onclick = function() {
   menuList.classList.toggle('show')
}

document.getElementById('company-link').addEventListener('click', function(event) {
    linkHandler(event, '.company')
})

document.getElementById('review-link').addEventListener('click', function(event) {
    linkHandler(event, '.review')
})

function linkHandler(event, className) {
    event.preventDefault()
    document.querySelector(className).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
}
