function Weather() {
  
};

Weather.prototype.isStormy = function() {
  var randomNumber = Math.floor(Math.random() * 10)
  if (randomNumber >= 7) {
    return false
  } else {
    return true
  }
};

