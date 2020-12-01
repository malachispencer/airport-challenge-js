const { Weather } = require('../src/weather.js');

describe('Weather', () => {
  describe('.current', () => {
    it('returns sunny or stormy at random', () => {
      let weathers = [];

      while (['sunny', 'stormy'].some(e => !weathers.includes(e))) {
        weathers.push(Weather.current());
      }

      weathers.forEach(weather => {
        expect(['sunny', 'stormy']).toContain(weather);
      });
    });
  });
}); 