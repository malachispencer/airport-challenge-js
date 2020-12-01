class Plane {
  constructor() {
    this.docked = false;
  }

  landed() {
    this.docked = true;
  }
}

module.exports = { Plane };