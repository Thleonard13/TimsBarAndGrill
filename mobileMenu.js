const mobileIcon = document.querySelector('#mobile')
const headerLinks = document.querySelector('.header-links')

const toggleMobileMenu = () => {
    console.log('Clicked mobile Menu!')
    headerLinks.classList.toggle('menu-active')
    console.log(headerLinks)

}

mobileIcon.addEventListener('click', toggleMobileMenu)
console.log(mobileIcon)
