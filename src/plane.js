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
}

module.exports = { Plane };