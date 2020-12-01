const { Plane } = require('./plane.js')

class Airport {
  constructor(capacity = 50) {
    this.planes = [];
    this.capacity = capacity;
  }

  land(plane) {
    this.planes.push(plane);
    plane.landed();
  }

  takeOff() {
    let plane = this.planes.shift();
    plane.flying();
    return plane;
  }
}

module.exports = { Airport };