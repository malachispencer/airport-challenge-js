const { Airport } = require('../src/airport.js')

describe('Airport', () => {
  describe('#land', () => {
    it('adds a Plane to the planes array', () => {
      let plane = jasmine.createSpyObj('plane', {landed: false});
      let airport = new Airport();
      airport.land(plane);
      expect(airport.planes.length).toEqual(1);
    });
  });
});