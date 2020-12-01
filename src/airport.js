const { Plane } = require('./plane.js');
const { Weather } = require('./weather.js');

class Airport {
  constructor(capacity = 50) {
    this.planes = [];
    this.capacity = capacity;
  }

  land(plane) {
    if (this.maxCapacity()) {
      throw 'Cannot land, Airport at max capacity.';
    }

    if (this.stormy()) {
      throw 'Weather conditions unacceptable for landing.';
    }

    this.planes.push(plane);
    plane.landed();
  }

  takeOff() {
    if (this.empty()) {
      throw 'Airport empty.'
    }

    if (this.stormy()) {
      throw 'Weather conditions unacceptable for take off.'
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

  stormy(weatherClass = Weather) {
    return weatherClass.current() === 'stormy';
  }
}

module.exports = { Airport };