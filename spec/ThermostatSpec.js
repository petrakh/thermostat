'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts with 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(thermostat.INITIAL_TEMP);
  });

  it('responds to up function', function(){
    thermostat.up(5)
    expect(thermostat.temperature()).toEqual(thermostat.INITIAL_TEMP + 5);
  });

  it('responds to down function', function(){
    thermostat.down(6)
    expect(thermostat.temperature()).toEqual(thermostat.INITIAL_TEMP - 6);
  });

  it('has a minimum temperature limit', function(){
    thermostat.down(11)
    expect(thermostat.temperature()).toEqual(thermostat.MINIMUM_TEMP);
  });

  it('has power saving mode on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM back on', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
});
