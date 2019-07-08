let panelList = document.querySelector('#panelList')
let batteryList = document.querySelector('#batteryList')
let systemList = document.querySelector('#systemList')
let panelForm = document.querySelector('#panelForm')
let batteryForm = document.querySelector('#batteryForm')
let controllerForm = document.querySelector('#controllerForm')


let paramsObj = {
    systemVoltage: null,
    peakSunHours: null,
    depthOfDischarge:null,
    autonomousDays: null,
    unitBatteryCapacity: null,
    unitBatteryVoltage: null,
    peakPowerOfaPanel: null,
    unitPanelPeakVoltage: null,
    unitPanelVoltage: null,
    unitCurrentRatingSCC: null
}

// Methods for getting parameters from the panel, battery and controller forms 
let getPanelParams = e => {
    e.preventDefault()
    return [
        e.target.unitPanelVoltage.value, 
        e.target.unitPeakPower.value, 
        e.target.unitPanelPeakVoltage.value
    ]
}

let getBatteryParams = e => {
    e.preventDefault()
    return [
        e.target.unitBatteryCapacity.value,
        e.target.unitBatteryVoltage.value,
        e.target.depthOfDischarge.value,
        e.target.daysOfAutonomous.value
    ]
}

let getSysControllerParams = e => {
    e.preventDefault()
    return [
        e.target.systemVoltage.value,
        e.target.peakSunHours.value,
        e.target.chargeControllerRating.value
    ]
}

// Renders the panel, battery and system controller parametres to the list view ui
let renderPanelParams = params => {
    let [a, b, c] = params
    panelList.innerHTML = ""
    
    let panelTemplate = `<p class="generalParams fontFamily">Unit Panel Voltage: <span class="unitParams">${a} volts</span></p>
    <p class="generalParams fontFamily">Unit Peak Power: <span class="unitParams">${b} Watts</span></p>
    <p class="generalParams fontFamily">Unit Panel Peak Voltage: <span class="unitParams">${c} volts</span></p>` 

    panelList.insertAdjacentHTML('beforeend', panelTemplate)
}

let renderBatteryParams = params => {
    let [a, b, c, d] = params
    batteryList.innerHTML = ""

    let batteryTemplate = `<p class="generalParams fontFamily">Unit Battery Capacity: <span class="unitParams">${a} Amp/Hr</span></p>
    <p class="generalParams fontFamily">Unit Battery Voltage: <span class="unitParams">${b} volts</span></p>
    <p class="generalParams fontFamily">Depth of Discharge: <span class="unitParams">${c} %</span></p>
    <p class="generalParams fontFamily">Days of Autonomous: <span class="unitParams">${d} days</span></p>`

    batteryList.insertAdjacentHTML('beforeend', batteryTemplate)
}

let renderSysParams = params => {
    let [a, b, c] = params
    systemList.innerHTML = ""

    let systemTemplate = `<p class="generalParams fontFamily">System Voltage: <span class="unitParams">${a} volts</span></p>
    <p class="generalParams fontFamily">Peak Sun Hours: <span class="unitParams">${b} hours</span></p>
    <p class="generalParams fontFamily">Charge Controller Rating: <span class="unitParams">${c} Amps</span></p>` 

    systemList.insertAdjacentHTML('beforeend', systemTemplate)
}

// Activates the panel, battery, system Controller params get and render functions on submit of the panel params form
panelForm.addEventListener("submit", e => {
    let params = getPanelParams(e)
    renderPanelParams(params)
    paramsObj.unitPanelVoltage = params[0]
    paramsObj.peakPowerOfaPanel = params[1]
    paramsObj.unitPanelPeakVoltage = params[2]

})

batteryForm.addEventListener("submit", e => {
    let params = getBatteryParams(e)
    renderBatteryParams(params)
    paramsObj.unitBatteryCapacity = params[0]
    paramsObj.unitBatteryVoltage = params[1]
    paramsObj.depthOfDischarge = params[2]
    paramsObj.autonomousDays = params[3]
})

controllerForm.addEventListener("submit", e => {
    let params = getSysControllerParams(e)
    renderSysParams(params)
    paramsObj.systemVoltage = params[0]
    paramsObj.peakSunHours = params[1]
    paramsObj.unitCurrentRatingSCC = params[2]
})

let getParamsObj = () => {
    return paramsObj
}

module.exports = {
    getParamsObj
}