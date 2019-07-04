let newProjectDisplay = document.querySelector('#newProjectDisplay')
let savedProjectDisplay = document.querySelector('#savedProjectDisplay')
let helpDisplay = document.querySelector('#helpDisplay')
let aboutDisplay = document.querySelector('#aboutDisplay')

// dipslay methods

let activeMenu = () => {
    let sideMenus = document.querySelectorAll('li')
    sideMenus.forEach( menu => {
        menu.classList.remove('sideNavActive')
    })
}

let toggleDisplay = (displays) => {
    let { showView, hideViewA, hideViewB, hideViewC } = displays
    hideViewA.style.display = "none"
    hideViewB.style.display = "none"
    hideViewC.style.display = "none"
    showView.style.display = "grid"
}




// Dom Actions
document.querySelector('#newProject').addEventListener('click', () => {
    activeMenu()
    document.querySelector('#newProject').classList.add('sideNavActive')
    let displays = {
        showView: newProjectDisplay,
        hideViewA: savedProjectDisplay,
        hideViewB: helpDisplay,
        hideViewC: aboutDisplay
    }
    toggleDisplay(displays)
})

document.querySelector('#savedProject').addEventListener('click', () => {
    activeMenu()
    document.querySelector('#savedProject').classList.add('sideNavActive')
    let displays = {
        showView: savedProjectDisplay,
        hideViewA: newProjectDisplay,
        hideViewB: helpDisplay,
        hideViewC: aboutDisplay
    }
    toggleDisplay(displays)
})

document.querySelector('#help').addEventListener('click', () => {
    activeMenu()
    document.querySelector('#help').classList.add('sideNavActive')
    let displays = {
        showView: helpDisplay,
        hideViewA: savedProjectDisplay,
        hideViewB: newProjectDisplay,
        hideViewC: aboutDisplay
    }
    toggleDisplay(displays)
})

document.querySelector('#about').addEventListener('click', () => {
    activeMenu()
    document.querySelector('#about').classList.add('sideNavActive')
    let displays = {
        showView: aboutDisplay,
        hideViewA: savedProjectDisplay,
        hideViewB: helpDisplay,
        hideViewC: newProjectDisplay
    }
    toggleDisplay(displays)
})