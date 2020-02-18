function Airport() {
  this.storage = []
  this.capacity = 5
}

Airport.prototype.land = function(plane) {
  if (this.storage.length >= this.capacity) {
    throw new Error("Airport is full")
  } else {
    this.storage.push(plane)
  }
}

Airport.prototype.takeoff = function() {
  this.storage.pop()
}