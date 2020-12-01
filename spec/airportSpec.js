const { Airport } = require('../src/airport.js')

describe('Airport', () => {
  let airport;
  let plane;

  beforeEach(() => {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['landed']);
  });

  describe('#land', () => {
    it('adds a Plane to the planes array', () => {
      airport.land(plane);
      expect(airport.planes.length).toEqual(1);
    });

    it('calls the landed function in the Plane class', () => {
      airport.land(plane);
      expect(plane.landed).toHaveBeenCalled();
    });
  });

  describe('#takeOff', () => {
    it('removes a Plane from the plane array', () => {
      airport.land(plane);
      airport.takeOff();
      expect(airport.planes.length).toBe(0);
    });
  });
});