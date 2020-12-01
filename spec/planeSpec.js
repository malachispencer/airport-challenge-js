const { Plane } = require('../src/plane.js');

describe('Plane', () => {
  let plane;

  beforeEach(() => {
    plane = new Plane();
  });

  describe('#landed', () => {
    it('changes docked from false to true', () => {
      plane.landed();
      expect(plane.docked).toEqual(true);
    });

    it('throws an exception is not called from Airport class', () => {
      expect(function() { plane.landed() }).toThrow('Only ATC Can Approve Landing.');
    });
  });

  describe('#flying', () => {
    it('changes docked from true to false', () => {
      plane.landed();
      plane.flying();
      expect(plane.docked).toBe(false);
    });
  });
});