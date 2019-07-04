// dipslay methods

let activeMenu = () => {
    let sideMenus = document.querySelectorAll('li')
    sideMenus.forEach( menu => {
        menu.classList.remove('sideNavActive')
    })
}




// Dom Actions
document.querySelector('#newProject').addEventListener('click', () => {
    activeMenu()
    document.querySelector('#newProject').classList.add('sideNavActive')
})

document.querySelector('#savedProject').addEventListener('click', () => {
    activeMenu()
    document.querySelector('#savedProject').classList.add('sideNavActive')
})

document.querySelector('#help').addEventListener('click', () => {
    activeMenu()
    document.querySelector('#help').classList.add('sideNavActive')
})

document.querySelector('#about').addEventListener('click', () => {
    activeMenu()
    document.querySelector('#about').classList.add('sideNavActive')
})