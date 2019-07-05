
let appliancesArray = [];

let getAppliances = () => {
  return appliancesArray;
}

class Appliance {
  constructor(...appliance){
    if (appliance.length !== 0) {
      [this.name, this.quantity, this.powerRating, this.powerRatingUnit, this.hourOfUsage, this.powerFactor] = appliance;
      this.applianceObj = {
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
    appliances.push(this.applianceObj);
  }
}

let text = "Amazing stuff really"

module.exports = {
  appliancesArray,
  getAppliances,
  Appliance,
  text
}