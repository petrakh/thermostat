'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts with 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(thermostat._INITIAL_TEMP);
  });

  it('responds to up function', function(){
    thermostat.up(5)
    expect(thermostat.temperature()).toEqual(thermostat._INITIAL_TEMP + 5);
  });

  it('responds to down function', function(){
    thermostat.down(6)
    expect(thermostat.temperature()).toEqual(thermostat._INITIAL_TEMP - 6);
  });
});
