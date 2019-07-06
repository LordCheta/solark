// imports
let { getAppliances, Appliance } = require('../models/applianceModel')
let { getUpdatedAppliances } = require('../models/calculatorModel')

// DOM elements
let applianceName = document.querySelector('#applianceName')
let applianceQty = document.querySelector('#applianceQty')
let applianceRating = document.querySelector('#applianceRating')
let ratingUnit = document.querySelector('#ratingUnit')
let hourOfUsage = document.querySelector('#hourOfUsage')
let powerFactor = document.querySelector('#powerFactor')
let resetFields = document.querySelector('#resetFields')
let addAppliance = document.querySelector('#addAppliance')
let listView = document.querySelector('#listView')

// method to get form input values
let getApplianceParams = e => {
    let applianceParams = {
        applianceName: applianceName.value
    }
}
