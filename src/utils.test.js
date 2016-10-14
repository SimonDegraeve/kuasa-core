/**
 *
 */
import { keysToLowerCase } from './utils';


/**
 *
 */
describe('Utils', () => {
  describe('keysToLowerCase()', () => {
    it('transforms the keys of an object to lowercase', () => {
      expect(keysToLowerCase({ A: 1 })).toEqual({ a: 1 });
    });
  });
});
