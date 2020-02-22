describe("Airport", function() {

  var plane
  var airport

  beforeEach(function() {
    plane = new Plane(); 
    airport = new Airport(5);
  });

  describe("land", function() {

    it('should let a plane land', function(){
      spyOn(airport.weather, 'isStormy').and.returnValue(false)
      console.log(airport.weather.isStormy());
      airport.land(plane)
      expect(airport.storage).toEqual([plane])
    });

    it('plane should have been prevented from landing due to capacity', function(){
      airport.storage = [plane, plane, plane, plane, plane]
      spyOn(airport.weather, 'isStormy').and.returnValue(false)
      expect(function(){airport.land(plane)}).toThrowError("Airport is full");
    });

    it('should prevent landing due to bad weather', function(){
      spyOn(airport.weather, 'isStormy').and.returnValue(true)
      expect(function(){airport.land(plane)}).toThrowError("Weather is too stormy")
    });

    it('should prevent taking off due to bad weather', function(){
      spyOn(airport.weather, 'isStormy').and.returnValue(true)
      expect(function(){airport.takeoff()}).toThrowError("Weather is too stormy")
    });

  });

  describe('takeoff', function(){

    it('plane should have taken off', function(){
      spyOn(airport.weather, 'isStormy').and.returnValue(false)
      airport.land(plane)
      airport.takeoff(plane)
      expect(airport.storage).toEqual([])
    });

  });
});