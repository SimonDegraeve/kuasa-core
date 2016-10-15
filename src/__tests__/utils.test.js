/**
 * @flow
 */
import { toLowerCaseKeys } from '../utils';


/**
 *
 */
test('utils.toLowerCaseKeys', () => {
  expect(toLowerCaseKeys({ A: 1 })).toEqual({ a: 1 });
});
