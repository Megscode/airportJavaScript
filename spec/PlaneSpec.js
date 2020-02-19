describe("Plane", function(){
  var plane
  var airport

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport(10);
  });

  it('plane should have a default inflight value of true', function() {
    expect(plane.inflight).toEqual(true)
  });

  it('should change plane to inflight if flying', function(){
    airport.land(plane)
    expect(plane.inflight).toEqual(false)
  });
});