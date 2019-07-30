// imports
let { getAppliances, Appliance, deleteAppliance, getAppliance, updateApplianceParams } = require('../models/applianceModel')

// DOM elements
let applianceForm = document.querySelector('#applianceForm');
let applianceViewUl = document.querySelector('#applianceViewUl')
let editAppliance = document.querySelector('#editAppliance')
let applianceName = document.querySelector('#applianceName')
let applianceQty = document.querySelector('#applianceQty')
let applianceRating = document.querySelector('#applianceRating')
let ratingUnit = document.querySelector('#ratingUnit')
let hourOfUsage = document.querySelector('#hourOfUsage')
let powerFactor = document.querySelector('#powerFactor')
let addAppliance = document.querySelector('#addAppliance')
let updateAppliance = document.querySelector('#updateAppliance')
let resetBtn = document.querySelector('#resetFields')

// method to get form input values
const getApplianceParams = e => {
    e.preventDefault()
     return {
        applianceName: e.target.applianceName.value,
        applianceQty: e.target.applianceQty.value,
        applianceRating: e.target.applianceRating.value,
        ratingUnit: e.target.ratingUnit.value,
        hourOfUsage: e.target.hourOfUsage.value,
        powerFactor: e.target.powerFactor.value
    }

}

const renderAplliancesToList = () => {
    applianceViewUl.innerHTML = ""
    let appliances = getAppliances()
    for (const appliance of appliances) {
        let listApplianceTemplate = `<li>
            <p class="listViewAppliance">${appliance.name}</p>
            <input type="hidden" id="applianceId" value="${appliance.id}"/>
            <button class="editAppliance">edit</button>
            <button class="removeAppliance">remove</button>
        </li>`

        applianceViewUl.insertAdjacentHTML("beforeend", listApplianceTemplate)
    }
}
applianceForm.addEventListener("submit", e => {
    e.preventDefault();
    let nA = getApplianceParams(e)

let newAppliance  = new Appliance(nA.applianceName, nA.applianceQty, nA.applianceRating, nA.ratingUnit, nA.hourOfUsage, nA.powerFactor)
    newAppliance.addToAppliances();

    renderAplliancesToList()
})

applianceViewUl.addEventListener('click', e => {
    if(e.target.matches("button.editAppliance")){
        let applianceId = e.target.parentNode.querySelector('input').value

        let applianceToEdit = getAppliance(applianceId)

        addAppliance.style.display = "none"
        updateAppliance.style.display = "block"

        appId.value = applianceToEdit.id
        applianceName.value = applianceToEdit.name
        applianceQty.value = applianceToEdit.quantity
        applianceRating.value = applianceToEdit.powerRating
        ratingUnit.value = applianceToEdit.powerRatingUnit
        hourOfUsage.value = applianceToEdit.hourOfUsage
        powerFactor.value = applianceToEdit.powerFactor
    }
    if(e.target.matches("button.removeAppliance")){
        let applianceId = e.target.parentNode.querySelector('input').value
        deleteAppliance(applianceId)
        renderAplliancesToList()
        alert('Appliance removed')

    }
})

updateAppliance.addEventListener('click', e => {
    e.preventDefault()
    let updatedAppliance = {
        id: appId.value,
        name: applianceName.value,
        quantity: applianceQty.value,
        powerRating: applianceRating.value,
        powerRatingUnit:ratingUnit.value,
        hourOfUsage: hourOfUsage.value,
        powerFactor: powerFactor.value
    }

    updateApplianceParams(updatedAppliance)
    addAppliance.style.display = "block"
    updateAppliance.style.display = "none"
    renderAplliancesToList()
})

resetBtn.addEventListener('click', () => {
    addAppliance.style.display = "block"
    updateAppliance.style.display = "none"
})