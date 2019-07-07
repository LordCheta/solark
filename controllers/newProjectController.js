let selectViewHeaders = document.querySelectorAll('.selectViewHeader');
let svBtns = document.querySelectorAll('.svBtns')
let applianceHeader = document.querySelector('#applianceHeader')
let panelHeader = document.querySelector('#panelHeader')
let batteryHeader = document.querySelector('#batteryHeader')
let controllerHeader = document.querySelector('#controllerHeader')
let applianceContent = document.querySelector('#applianceContent')
let panelContent = document.querySelector('#panelContent')
let batteryContent = document.querySelector('#batteryContent')
let controllerContent = document.querySelector('#controllerContent')
let applianceBtn = document.querySelector('#applianceBtn')
let panelBtn = document.querySelector('#panelBtn')
let batteryBtn = document.querySelector('#batteryBtn')
let controllerBtn = document.querySelector('#controllerBtn')
let activeHeader = document.querySelectorAll('.activeHeader')
let activeBtn = document.querySelectorAll('.activeBtn')

let toggleView = params => {
    let
    {
        btnToShow,
        headerToShow,
        headerToHide1,
        headerToHide2,
        headerToHide3,
        colorOfHeaderShown,
        contentToShow,
        contentToHide1,
        contentToHide2,
        contentToHide3 } = params

    selectViewHeaders.forEach(header => {
        header.classList.remove('activeHeader')
    });
        headerToShow.classList.add('activeHeader')

    svBtns.forEach( btn => {
        btn.classList.remove('activeBtn')
        btn.style.backgroundColor = ""
    })

        btnToShow.classList.add('activeBtn')

    headerToHide1.style.display = 'none'
    headerToHide2.style.display = 'none'
    headerToHide3.style.display = 'none'
    headerToShow.style.display = 'block'

    // Fix the dynamic background color changing
    document.querySelectorAll('.activeBtn').forEach( btn => {
        btn.style.backgroundColor = colorOfHeaderShown
    })

    document.querySelectorAll('.activeHeader').forEach( header => {
        header.style.backgroundColor = colorOfHeaderShown
    })

    contentToHide1.style.display = 'none'
    contentToHide2.style.display = 'none'
    contentToHide3.style.display = 'none'
    contentToShow.style.display = 'block'
}


applianceBtn.addEventListener('click', () => {
    let params = {
        btnToShow: applianceBtn,
        headerToShow: applianceHeader,
        headerToHide1: panelHeader,
        headerToHide2: batteryHeader,
        headerToHide3: controllerHeader,
        colorOfHeaderShown: '#68c5a1',
        contentToShow: applianceContent,
        contentToHide1: panelContent,
        contentToHide2: batteryContent,
        contentToHide3 : controllerContent
    }

    toggleView(params)
})

panelBtn.addEventListener('click', () => {
    let params = {
        btnToShow: panelBtn,
        headerToShow: panelHeader,
        headerToHide1: applianceHeader,
        headerToHide2: batteryHeader,
        headerToHide3: controllerHeader,
        colorOfHeaderShown: '#5e5896',
        contentToShow: panelContent,
        contentToHide1: applianceContent,
        contentToHide2: batteryContent,
        contentToHide3 : controllerContent
    }

    toggleView(params)
})

batteryBtn.addEventListener('click', () => {
    let params = {
        btnToShow: batteryBtn,
        headerToShow: batteryHeader,
        headerToHide1: applianceHeader,
        headerToHide2: panelHeader,
        headerToHide3: controllerHeader,
        colorOfHeaderShown: 'green',
        contentToShow: batteryContent,
        contentToHide1: applianceContent,
        contentToHide2: panelContent,
        contentToHide3 : controllerContent
    }

    toggleView(params)
})

controllerBtn.addEventListener('click', () => {
    let params = {
        btnToShow: controllerBtn,
        headerToShow: controllerHeader,
        headerToHide1: applianceHeader,
        headerToHide2: panelHeader,
        headerToHide3: batteryHeader,
        colorOfHeaderShown: '#0f222f',
        contentToShow: controllerContent,
        contentToHide1: applianceContent,
        contentToHide2: panelContent,
        contentToHide3 : batteryContent
    }

    toggleView(params)
})
