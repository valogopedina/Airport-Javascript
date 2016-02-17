'use strict';

describe('Airport', function() {
	var airport;
	var plane;
	
	beforeEach(function () {
		airport = new Airport();
		//weather = jasmine.createSpyObj('weather', ['condition']);
		plane = jasmine.createSpyObj('plane', ['name']);
	});
	
 
	   it('has a spy object for plane', function () {
	   	expect(plane.name).toBeDefined();
	   });
	    
		it('can land a pane at an airport', function () {
			//spyOn(plane, 'name').and.returnValue("737");
			//spyOn(weather, 'condition').and.returnValue("stormy");
			expect(airport.land).not.toBeUndefined()
			
		});	
  });

