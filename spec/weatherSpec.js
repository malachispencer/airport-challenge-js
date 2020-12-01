const { Weather } = require('../src/weather.js');

describe('Weather', () => {
  describe('.current', () => {
    it('returns sunny or stormy at random', () => {
      let weather = Weather.current();
      expect(['sunny', 'stormy']).toContain(weather);
    });
  });
}); 