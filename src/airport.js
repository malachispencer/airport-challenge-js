const { Plane } = require('./plane.js')

class Airport {
  constructor() {
    this.planes = [];
  }

  land(plane) {
    this.planes.push(plane);
    plane.landed();
  }
}

module.exports = { Airport };