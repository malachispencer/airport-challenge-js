const { Plane } = require('./plane.js')

class Airport {
  constructor(capacity = 50) {
    this.planes = [];
    this.capacity = capacity;
  }

  land(plane) {
    if (this.maxCapacity()) {
      throw 'Cannot land, Airport at max capacity.';
    }

    this.planes.push(plane);
    plane.landed();
  }

  takeOff() {
    if (this.empty()) {
      throw 'Airport empty.'
    }

    let plane = this.planes.shift();
    plane.flying();
    return plane;
  }

  maxCapacity() {
    return this.planes.length === this.capacity;
  }

  empty() {
    return !this.planes.length;
  }
}

module.exports = { Airport };