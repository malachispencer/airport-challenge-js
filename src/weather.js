class Weather {
  static current() {
    return this.generate();
  }

  static generate() {
    let stormyNum = Math.ceil(Math.random() * 20);
    let randNum = Math.ceil(Math.random() * 20);
    return stormyNum === randNum ? 'stormy' : 'sunny';
  }
}

module.exports = { Weather };