class Plane {
  constructor() {
    this.docked = false;
  }

  landed() {
    this.docked = true;
  }

  flying() {
    this.docked = false;
  }

  atc_request() {
    let stackTraceArray = new Error().stack.split('\n');

    return stackTraceArray.some(line => {
      return RegExp('/src/airport.js').test(line);
    });
  }
}

module.exports = { Plane };