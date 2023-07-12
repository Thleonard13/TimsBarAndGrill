const mobileIcon = document.querySelector('#mobile')
const headerLinks = document.querySelector('.header-links')

const toggleMobileMenu = () => {
    headerLinks.classList.toggle('menu-active')
}

mobileIcon.addEventListener('click', toggleMobileMenu)
