// Returns a random number between min (inclusive) and max (exclusive)
var min = 1;
var max = 100;

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
 }


module.exports = randomNumber;
