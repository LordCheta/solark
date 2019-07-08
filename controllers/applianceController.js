// imports
let { getAppliances, Appliance } = require('../models/applianceModel')
let getUpdatedAppliances = require('../models/calculatorModel')
let { notEmpty } = require('../models/validationModel')

// DOM elements
let applianceForm = document.querySelector('#applianceForm');
let resetFields = document.querySelector('#resetFields')
let applianceViewUl = document.querySelector('#applianceViewUl')

// method to get form input values
const getApplianceParams = (e) => {
    e.preventDefault();
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
            <button class="editAppliance">edit</button>
            <button class="removeAppliance">remove</button>
        </li>`

        applianceViewUl.insertAdjacentHTML("beforeend", listApplianceTemplate)
    }
}
applianceForm.addEventListener("submit", (e) => {
        let nA = getApplianceParams(e)

        let newAppliance  = new Appliance(nA.applianceName, nA.applianceQty, nA.applianceRating, nA.ratingUnit, nA.hourOfUsage, nA.powerFactor)
        newAppliance.addToAppliances();

        renderAplliancesToList()

})
