describe("Airport", function() {
  var plane
  var airport
  beforeEach(function() {
    plane = new Plane(); 
    airport = new Airport();
  });

  it('should let a plane land', function(){
    airport.land(plane)
    expect(airport.storage).toEqual([plane])
  });

  it('plane should have taken off', function(){
    airport.land(plane)
    airport.takeoff(plane)
    expect(airport.storage).toEqual([])
  });

  it('plane should have been prevented from landing due to capacity', function(){
    for(var i=0; i < airport.capacity; i++){
    airport.land(plane);
    }
    expect(function(){airport.land(plane)}).toThrowError("Airport is full");
  });

});