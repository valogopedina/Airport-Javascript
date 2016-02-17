'use strict';

describe('Airport', function() {
	var airport;
	var plane;
	//var weather;
	
	describe('allows', function () {
		
		it('a plane to land into the airport', function () {
			airport = new Airport();
			plane = new Plane();
			expect(airport.land(plane)).toEqual("737 landed into Airport");
		});
		
		it('a plane to take-off from the airport', function () {
			airport = new Airport();
			plane = new Plane();
			expect(airport.takeOff(plane)).toEqual("737 took off from Airport");
		});
	});
	
	
	describe('does not allow', function () {
		
		beforeEach(function() {
		  airport = new Airport();
		  plane = new Plane();
		  //weather = new Weather();
		});
		
	
		
		it("a plane to take-off from the airport when it's stormy", function () {
			
			spyOn(airport, 'isStormy').and.returnValue(true);
			expect(airport.takeOff(plane)).toEqual("737 could not take off from Airport")
		});
	});
});