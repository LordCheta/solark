// imports
let { getAppliances, Appliance } = require('../models/applianceModel')
let getUpdatedAppliances = require('../models/calculatorModel')
let { notEmpty } = require('../models/validationModel')

// DOM elements
let applianceForm = document.querySelector('#applianceForm');
let resetFields = document.querySelector('#resetFields')
// let addAppliance = document.querySelector('#addAppliance');
let listView = document.querySelector('#listView')

// method to get form input values
let getApplianceParams = () => {
    /* let applianceParams = {
        applianceName: applianceName.value
    } */

    applianceForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let applianceName = e.target.applianceName.value;
        let applianceQty = e.target.applianceQty.value;
        let applianceRating = e.target.applianceRating.value;
        let ratingUnit = e.target.ratingUnit.value;
        let hourOfUsage = e.target.hourOfUsage.value;
        let powerFactor = e.target.powerFactor.value;
        console.log(applianceName,applianceQty,applianceRating,ratingUnit,hourOfUsage,powerFactor);
         /*
        if(notEmpty(applianceName) && notEmpty(applianceQty) && notEmpty(applianceRating) && notEmpty(ratingUnit) && notEmpty(hourOfUsage) && notEmpty(powerFactor)){
            let device = new Appliance(applianceName,applianceQty,applianceRating,ratingUnit,hourOfUsage,powerFactor);
            device.addToAppliances();
            let appliances = getAppliances();
            appliances = getUpdatedAppliances(appliances);
            console.log(appliances);
        } */
    })

}
getApplianceParams();
