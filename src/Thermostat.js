'use strict';

function Thermostat(){
  this._INITIAL_TEMP = 20;
  this._degrees = this._INITIAL_TEMP;
};

Thermostat.prototype.temperature = function(){
  return this._degrees;
};

Thermostat.prototype.up = function(number){
  return this._degrees = this._degrees + number
};

Thermostat.prototype.down = function(number){
   return this._degrees = this._degrees - number
};
