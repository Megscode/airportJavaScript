function Airport(capacity) {
  this.storage = []
  this.capacity = capacity
}

Airport.prototype.land = function(plane) {
  if (this.storage.length >= this.capacity) {
    throw new Error("Airport is full")
  } else {
    this.storage.push(plane)
    plane.inflight = false
  }
}

Airport.prototype.takeoff = function() {
  this.storage.pop()
}