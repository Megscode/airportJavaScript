function Airport() {
  this.storage = []
}

Airport.prototype.land = function(plane) {
this.storage.push(plane)
}