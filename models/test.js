const Solark = require("./solarkModel");
const { getAppliances, Appliance } = require("./applianceModel");
const getUpdatedAppliances = require("./calculatorModel");

// use Appliance class as such
/*
* let <applianceNAme> = new Appliance(name, quantity, powerRating,'powerRatingUnit', hourOfUsage, powerFactor);
* <applianceName>.addToAppliances();
*/

let fan = new Appliance('fan','5','750','W','9','0.8');
fan.addToAppliances();

let fridge = new Appliance('fridge','5','1500','W','9','0.8');
fridge.addToAppliances();

let touch = new Appliance('touch','5','50','W','9','0.8');
touch.addToAppliances();

let appliances = getAppliances();
appliances = getUpdatedAppliances(appliances);

// console.log(appliances);

// use Solark class as such
/*
* const <houseSolar> = new Solark(appliances, systemVoltage, peakSunHour);
* <houseSolar>.calculateParameters(depthOfDischarge, autonomousDays, unitBatteryCapacity, unitBatteryVoltage, peakPowerOfaPanel, unitPanelPeakVoltage, unitPanelVoltage, unitCurrentRatingSCC)
* const solarReportObj = <houseSolar>.generateReport();
* console.log(solarReportObj);
*/

const adminBlockA = new Solark(appliances, 240, 4.71);
adminBlockA.calculateParameters(50, 3, 200, 12, 280, 35.5, 24, 50)
const solarReportObj = adminBlockA.generateReport();
console.log(solarReportObj);