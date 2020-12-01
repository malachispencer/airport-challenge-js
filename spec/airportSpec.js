const { Airport } = require('../src/airport.js');

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
      let smallerAirport = new Airport(25);
      expect(smallerAirport.capacity).toEqual(25);
    });
  });

  describe('#land', () => {
    it('adds a Plane to the planes array', () => {
      spyOn(airport, 'stormy').and.returnValue(false);
      airport.land(plane);
      expect(airport.planes.length).toEqual(1);
    });

    it('calls the landed function in the Plane class', () => {
      spyOn(airport, 'stormy').and.returnValue(false);
      airport.land(plane);
      expect(plane.landed).toHaveBeenCalled();
    });

    it('throws an exception if Airport is at max capacity', () => {
      spyOn(airport, 'stormy').and.returnValue(false);

      for (let i = 1; i <= 50; i++) {
        airport.land(plane);
      }

      expect(function() { airport.land(plane) }).toThrow('Cannot land, Airport at max capacity.');
    });

    it('throws an exception if the weather is stormy', () => {
      spyOn(airport, 'stormy').and.returnValue(true);
      expect(function() { airport.land(plane) }).toThrow('Weather conditions unacceptable for landing.');
    });
  });

  describe('#takeOff', () => {
    it('removes a Plane from the plane array', () => {
      spyOn(airport, 'stormy').and.returnValue(false);
      airport.land(plane);
      airport.takeOff();
      expect(airport.planes.length).toBe(0);
    });

    it('returns the removed Plane', () => {
      spyOn(airport, 'stormy').and.returnValue(false);
      airport.land(plane);
      expect(airport.takeOff()).toEqual(plane);
    });

    it('calls the #flying method in the Plane class', () => {
      spyOn(airport, 'stormy').and.returnValue(false);
      airport.land(plane);
      airport.takeOff();
      expect(plane.flying).toHaveBeenCalled();
    });

    it('throws an exception if the planes array is empty', () => {
      spyOn(airport, 'stormy').and.returnValue(false);
      expect(function() { airport.takeOff() }).toThrow('Airport empty.')
    });

    it('throws an exception if the weather is stormy', () => {
      spyOn(airport, 'stormy').and.returnValue(false);
      airport.land(plane);
      airport.stormy = jasmine.createSpy('stormy').and.returnValue(true);
      expect(function() { airport.takeOff() }).toThrow('Weather conditions unacceptable for take off.');
    });
  });
});