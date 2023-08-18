const iconHamburguer = document.querySelector('.icon-hamburguer')
const mobileBar = document.querySelector('.bar-mobile')
const iconClose = document.querySelector('.icon-x')

iconHamburguer.addEventListener("click",openBarMobile)
iconClose.addEventListener("click",closeBarMobile)

function openBarMobile() {
    mobileBar.classList.remove('disable')
}

function closeBarMobile() {
    mobileBar.classList.add('disable')
}