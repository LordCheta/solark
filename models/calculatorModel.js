//convert Hp power to Watt
const hpToWatt = (hpPowerValue) => Number((0.746 * hpPowerValue * 1000).toFixed(2));

//convert all power to watts
const calPowerRatingWatt = (powerRatingUnit, powerRating) => {
  powerRatingWatt = (powerRatingUnit === "W") ? powerRating : hpToWatt(powerRating);
  return powerRatingWatt;
}

//get power unit, Ps in (VA)
const calUnitPower = (powerRatingWatt, powerFactor) => {
  unitPower = Number((powerRatingWatt / powerFactor).toFixed(2));
  return unitPower;
}

//get power for each appliance, P in (VA)
const calPower = (quantity, unitPower) => {
  power = Number((quantity * unitPower).toFixed(2));
  return power;
}

//get energy for each appliance, e in (VAh)
const calEnergy = (power, hourOfUsage) => {
  energy = Number((power * hourOfUsage).toFixed(2));
  return energy;
}

//add other appliance properties
const upadteAppliance = (appliances) => {
  appliances.forEach(appliance => {
    appliance.quantity = Number(appliance.quantity);
    appliance.powerRating = Number(appliance.powerRating);
    appliance.hourOfUsage = Number(appliance.hourOfUsage);
    appliance.powerFactor = Number(appliance.powerFactor);
    appliance.powerRatingWatt = calPowerRatingWatt(appliance.powerRatingUnit,appliance.powerRating);
    appliance.unitPower = calUnitPower(appliance.powerRatingWatt,appliance.powerFactor);
    appliance.power = calPower(appliance.quantity,appliance.unitPower);
    appliance.energy = calEnergy(appliance.power,appliance.hourOfUsage);
  });
  return appliances;
}

module.exports = getUpdatedAppliances = (appliances) => {
  return upadteAppliance(appliances);
}
