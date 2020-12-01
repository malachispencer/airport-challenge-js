const { Plane } = require('./plane.js')

class Airport {
  constructor() {
    this.planes = [];
  }

  land(plane) {
    this.planes.push(plane);
    plane.landed();
  }

  takeOff() {
    let plane = this.planes.shift();
    return plane;
  }
}

module.exports = { Airport };