class Plane {
  constructor() {
    this.docked = false;
  }

  landed() {
    if (!this.atcRequest()) {
      throw 'Only ATC can approve landing.';
    }

    this.docked = true;
  }

  flying() {
    this.docked = false;
  }

  atcRequest() {
    let stackTraceArray = new Error().stack.split('\n');

    return stackTraceArray.some(line => {
      return RegExp('/src/airport.js').test(line);
    });
  }
}

module.exports = { Plane };