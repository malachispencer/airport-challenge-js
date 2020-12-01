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
  });

  describe('#flying', () => {
    it('changes docked from true to false', () => {
      plane.landed();
      plane.flying();
      expect(plane.docked).toBe(false);
    });
  });
});