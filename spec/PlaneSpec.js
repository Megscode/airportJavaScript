describe("Plane", function(){
  var plane
  var airport

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport(10);
  });

  it('plane should have a default inflight value of true', function() {
    expect(plane.isInflight).toEqual(true)
  });

  it('should change plane to inflight if flying', function(){
    spyOn(airport.weather, 'isStormy').and.returnValue(false)
    airport.land(plane)
    expect(plane.isInflight).toEqual(false)
  });
});