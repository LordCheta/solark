module.exports = class Solark {
  constructor(appliances, systemVoltage, peakSunHour){
    this.appliances = appliances;
    this.systemVoltage = systemVoltage;
    this.peakSunHour = peakSunHour;
    this.totalApplianceEnergy = 0;
    this.totalAppliancePower = 0;

  }
  calEnergynPowerParameters () {
    this.appliances.forEach(appliance => {
      this.totalAppliancePower += appliance.power;
      this.totalApplianceEnergy += appliance.energy;
    });
    this.consumerEnergyDemand = Number((this.totalApplianceEnergy / 1).toFixed(2));
    this.inverterPowerRating = Number(((4 / 3) * this.totalAppliancePower).toFixed(2));
  }
  calulateBatteryParameters (depthOfDischarge, autonomousDays, unitBatteryCapacity, unitBatteryVoltage) {
    this.batteryDischarge = Number((this.consumerEnergyDemand / this.systemVoltage).toFixed(2));
    this.batteryCapacity = Number(((this.batteryDischarge * autonomousDays) / depthOfDischarge).toFixed(2));
    this.noOfBatteriesinSeries = Number((this.systemVoltage / unitBatteryVoltage).toFixed(2));
    this.noOfBatteriesinParallel = Number((this.batteryCapacity / unitBatteryCapacity).toFixed(2));
    this.noOfBatteriesNeeded = Number((this.noOfBatteriesinParallel * this.noOfBatteriesinSeries).toFixed(2));

  }
  calulatePanelParameters (peakPowerOfaPanel, unitPanelPeakVoltage, unitPanelVoltage) {
    this.totalPVCurrent = Number(((1.2 * this.batteryDischarge) / this.peakSunHour).toFixed(2));
    this.noOfPanelsinSeries = Number((this.systemVoltage / unitPanelVoltage).toFixed(2));
    this.panelArrayPeakVoltage = Number((unitPanelPeakVoltage * (this.systemVoltage / unitPanelVoltage)).toFixed(2));
    this.panelArrayPeakpower = Number((this.panelArrayPeakVoltage * this.totalPVCurrent).toFixed(2));
    this.noOfPVPanels = Number((this.panelArrayPeakpower / peakPowerOfaPanel).toFixed(2));
    this.noOfPanelsinParallel = Number((this.noOfPVPanels / this.noOfPanelsinSeries).toFixed(2));
    this.noOfPanelsNeeded = Number((this.noOfPanelsinParallel * this.noOfPanelsinSeries).toFixed(2));
  }
  calulateControllerParameters (unitCurrentRatingSCC) {
    this.noOfControllerNeeded = Number(((1.2 * this.totalPVCurrent) / unitCurrentRatingSCC).toFixed(2));
    this.totalNoOfSCCNeeded = Number((this.noOfControllerNeeded * 5).toFixed(2));
  }
  calculateParameters (depthOfDischarge, autonomousDays, unitBatteryCapacity, unitBatteryVoltage, peakPowerOfaPanel, unitPanelPeakVoltage, unitPanelVoltage, unitCurrentRatingSCC) {
    this.calEnergynPowerParameters();
    this.calulateBatteryParameters(depthOfDischarge, autonomousDays, unitBatteryCapacity, unitBatteryVoltage);
    this.calulatePanelParameters(peakPowerOfaPanel, unitPanelPeakVoltage, unitPanelVoltage);
    this.calulateControllerParameters (unitCurrentRatingSCC);
  }
  generateReport () {
    return {
      totalApplianceEnergy : this.totalApplianceEnergy,
      consumerEnergyDemand : this.consumerEnergyDemand,
      totalAppliancePower : this.totalAppliancePower,
      inverterPowerRating : this.inverterPowerRating,
      batteryDischarge : this.batteryDischarge,
      batteryCapacity : this.batteryCapacity,
      batteriesNeeded : this.noOfBatteriesNeeded.toFixed(0),
      totalPVCurrent : this.totalPVCurrent,
      panelsNeeded : this.noOfPanelsNeeded.toFixed(0),
      SCCNeeded : this.totalNoOfSCCNeeded.toFixed(0)
    }
  }
}

