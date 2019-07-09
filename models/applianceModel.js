const uuid4 = require('uuid4')
const appliancesArray = []

const getAppliances = () => {
  return appliancesArray
}

const deleteAppliance = id => {
  let idIndex = appliancesArray.findIndex((appliance) => appliance.id == id)
  if(idIndex >= 0) return appliancesArray.splice(idIndex,1)[0]
  return false
}

const getAppliance = id => {
  let app = appliancesArray.find(appliance => appliance.id == id); 
  if (app) return app;
  return false
}

const updateApplianceParams = params => {
  console.log(appliancesArray);
  let idIndex = appliancesArray.findIndex(app => app.id == params.id);
  appliancesArray.splice(idIndex,1,params)
}
class Appliance {
  constructor(...appliance){
    if (appliance.length !== 0) {
      [this.name, this.quantity, this.powerRating, this.powerRatingUnit, this.hourOfUsage, this.powerFactor] = appliance;
      this.applianceObj = {
        id: uuid4(),
        name: this.name,
        quantity: this.quantity,
        powerRating: this.powerRating,
        powerRatingUnit: this.powerRatingUnit,
        hourOfUsage: this.hourOfUsage,
        powerFactor: this.powerFactor
      }
    }
  }
  addToAppliances () {
    appliancesArray.push(this.applianceObj);
  }
}


module.exports = {
  getAppliances,
  Appliance,
  deleteAppliance,
  getAppliance,
  updateApplianceParams
}