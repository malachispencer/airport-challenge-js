const { Plane } = require('../src/plane.js');

describe('Plane', () => {
  let plane;

  beforeEach(() => {
    plane = new Plane();
  });

  describe('#landed', () => {
    it('changes docked from false to true', () => {
      spyOn(plane, 'atcRequest').and.returnValue(true);
      plane.landed();
      expect(plane.docked).toEqual(true);
    });

    it('throws an exception if not called from Airport class', () => {
      expect(function() { plane.landed() }).toThrow('Only ATC can approve landing.');
    });
  });

  describe('#flying', () => {
    it('changes docked from true to false', () => {
      spyOn(plane, 'atcRequest').and.returnValue(true);
      plane.landed();
      plane.flying();
      expect(plane.docked).toBe(false);
    });
  });
});