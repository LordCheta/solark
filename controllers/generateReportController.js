const getUpdatedAppliances = require('../models/calculatorModel')
const Solark = require("../models/solarkModel");
const { getAppliances } = require("../models/applianceModel");
let { getParamsObj } = require("../controllers/panelBatterySysController")

let reportParams = document.querySelector('#reportParams')
let reportView = document.querySelector('#reportView')
let displayArea = document.querySelector('#displayArea')
let sideNav = document.querySelector('#sideNav')
let reportBtn = document.querySelector('#generateReportBtn')
let goHome = document.querySelector('#goHome')
let saveReport = document.querySelector('#saveReport')
let printReport = document.querySelector('#printReport')


let validateParamsObj = params => {
    for (param in params) {
        if (params[param] == null) return false
    }
    return true
}

reportBtn.addEventListener('click', () => {
    reportParams.innerHTML = ""
    let paramsObj = getParamsObj()
    let isValid = validateParamsObj(paramsObj)
    if(isValid == false) {
        alert("Please Fill in all parameters"); 
        return
    }
    
    let newSolark = new Solark(
        getUpdatedAppliances(getAppliances()),
        paramsObj.systemVoltage,
        paramsObj.peakSunHours
    )

    newSolark.calculateParameters(
        paramsObj.depthOfDischarge,
        paramsObj.autonomousDays,
        paramsObj.unitBatteryCapacity,
        paramsObj.unitBatteryVoltage,
        paramsObj.peakPowerOfaPanel,
        paramsObj.unitPanelPeakVoltage,
        paramsObj.unitPanelVoltage,
        paramsObj.unitCurrentRatingSCC
    )

    let report = newSolark.generateReport()
    let reportTemplate = `
    <p class="fontFamily unitReports"><span class="unitName">Total Appliance Energy:</span> <span class="unitValue">${report.totalApplianceEnergy} watts</span></p>
    <p class="fontFamily unitReports"><span class="unitName">Consumer Energy Demand:</span> <span class="unitValue">${report.consumerEnergyDemand} watts</span></p>
    <p class="fontFamily unitReports"><span class="unitName">Total Appliance Power:</span> <span class="unitValue">${report.totalAppliancePower} watts</span></p>
    <p class="fontFamily unitReports"><span class="unitName">Inverter Power Rating:</span> <span class="unitValue">${report.inverterPowerRating} watts</span></p>
    <p class="fontFamily unitReports"><span class="unitName">Battery Discharge:</span> <span class="unitValue">${report.batteryDischarge} amp/hr</span></p>
    <p class="fontFamily unitReports"><span class="unitName">Battery Capacity:</span> <span class="unitValue">${report.batteryCapacity} amp/hr</span></p>
    <p class="fontFamily unitReports"><span class="unitName">Batteries Needed:</span> <span class="unitValue">${report.batteriesNeeded} batteries</span></p>
    <p class="fontFamily unitReports"><span class="unitName">Total PV Current:</span> <span class="unitValue">${report.totalPVCurrent} amps</span></p>
    <p class="fontFamily unitReports"><span class="unitName">Panels Needed:</span> <span class="unitValue">${report.panelsNeeded} panels</span></p>
    <p class="fontFamily unitReports"><span class="unitName">SCC Needed:</span> <span class="unitValue">${report.SCCNeeded} watts</span></p>
    `
    reportParams.insertAdjacentHTML('beforeend', reportTemplate)

    displayArea.style.display = "none"
    sideNav.style.display = "none"
    reportView.style.display = "grid"
})

goHome.addEventListener('click', () => {
    displayArea.style.display = "grid"
    sideNav.style.display = "grid"
    reportView.style.display = "none"
})

saveReport.addEventListener('click', () => {
    alert("Funtionality currently not available")
})