const { Airport } = require('../src/airport.js')

describe('Airport', () => {
  let airport;
  let plane;

  beforeEach(() => {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['landed', 'flying']);
  });

  describe('#constructor', () => {
    it('sets the Airport capacity to 50 by default', () => {
      expect(airport.capacity).toEqual(50);
    });

    it('allows user to set their own capacity', () => {
      smallerAirport = new Airport(25);
      expect(smallerAirport.capacity).toEqual(25);
    });
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

    it('returns the removed Plane', () => {
      airport.land(plane);
      expect(airport.takeOff()).toEqual(plane);
    });

    it('calls the #flying method in the Plane class', () => {
      airport.land(plane);
      airport.takeOff();
      expect(plane.flying).toHaveBeenCalled();
    });
  });
});