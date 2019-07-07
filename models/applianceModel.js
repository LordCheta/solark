const uuid4 = require('uuid4');
const appliancesArray = [];

const getAppliances = () => {
  return appliancesArray;
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
  Appliance
}