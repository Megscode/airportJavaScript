describe('Weather', function(){

  var weather 

  beforeEach(function(){
    weather = new Weather();
  })

  it('weather should be stormy', function(){
    spyOn(Math, 'random').and.returnValue(0)
    
    expect(weather.isStormy()).toBeTruthy();
  });

  it('weather should be not be stormy', function(){
    spyOn(Math, 'random').and.returnValue(8)
    
    expect(weather.isStormy()).toBeFalsy();
  });
  
});

