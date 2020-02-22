
function Airport(capacity, weather = new Weather()) {
  this.storage = []
  this.capacity = capacity
  this.weather = weather

}

Airport.prototype.land = function(plane) {
  if (this.storage.length >= this.capacity) {
    throw new Error("Airport is full")
  } else if (this.weather.isStormy() === true) {
    throw new Error("Weather is too stormy")
  } else {
    this.storage.push(plane)
    plane.isInflight = false
  }
}

Airport.prototype.takeoff = function() {
  if (this.weather.isStormy() === true) {
    throw new Error("Weather is too stormy")
  } else {
  this.storage.pop()
  }
}



