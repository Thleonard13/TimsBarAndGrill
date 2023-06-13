import menus from './menus.js'

const breakfastBtn = document.getElementById('breakfast-btn')
const lunchBtn = document.getElementById('lunch-btn')
const dinnerBtn = document.getElementById('dinner-btn')
const domMenu = document.getElementById('menu')

const togglesMenus = (menu, menuName) => {
    let menuItems = document.querySelectorAll('.menu-item')
    menuItems.forEach(item => item.remove())
    menu.map(item => {
        let menuItem = document.createElement('div')
        let name = document.createElement('h4')
        let description = document.createElement('p')
        let price = document.createElement('p')
        let menuTitle = document.getElementById('menu-title')
        menuTitle.innerText = menuName
        menuItem.classList.add('menu-item') 
        price.classList.add('price')
        name.innerText = item.name
        description.innerText = item.description
        price.innerText = "$" + item.price
        menuItem.appendChild(name)
        menuItem.appendChild(description)
        menuItem.appendChild(price)
        domMenu.appendChild(menuItem)
    })
}

togglesMenus(menus.breakfastMenu, 'Breakfast');

breakfastBtn.addEventListener('click', () => togglesMenus(menus.breakfastMenu, 'Breakfast'))
lunchBtn.addEventListener('click', () => togglesMenus(menus.lunchMenu, 'Lunch'))
dinnerBtn.addEventListener('click', () => togglesMenus(menus.dinnerMenu, 'Dinner'))
