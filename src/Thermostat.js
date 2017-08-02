'use strict';

function Thermostat(){
  this.INITIAL_TEMP = 20;
  this.MINIMUM_TEMP = 10;
  this._degrees = this.INITIAL_TEMP;
};

Thermostat.prototype.temperature = function(){
  return this._degrees;
};

Thermostat.prototype.up = function(number){
  return this._degrees = this._degrees + number
};

Thermostat.prototype.isBelowMinimumTemp = function(number){
  return (this._degrees - number) < this.MINIMUM_TEMP;
};

Thermostat.prototype.down = function(number){
  if (this.isBelowMinimumTemp(number)) {
    this._degrees = this.MINIMUM_TEMP;
  }
  else {
    return this._degrees = this._degrees - number
  };
};
