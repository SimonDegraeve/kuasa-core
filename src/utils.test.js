/**
 *
 */
import { toLowerCaseKeys } from './utils';


/**
 *
 */
describe('Utils', () => {
  describe('toLowerCaseKeys()', () => {
    it('transforms the keys of an object to lowercase', () => {
      expect(toLowerCaseKeys({ A: 1 })).toEqual({ a: 1 });
    });
  });
});
