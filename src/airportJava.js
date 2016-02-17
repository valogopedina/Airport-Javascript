'use strict';

var Airport = function() {};
		

Airport.prototype.land = function(plane) {
	return plane.name() + " landed into Airport";
};

 Airport.prototype.isStormy = function(weather) {
	 if (weather.condition() === "stormy") return true;
	 return false;
 };

Airport.prototype.takeOff = function(plane) {
	if (this.isStormy === true) return plane.name() + " could not take off from Airport";
	return plane.name() + " took off from Airport";
};




