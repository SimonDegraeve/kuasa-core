/**
 * @flow
 */
export function toLowerCaseKeys(obj: {} = {}): {} {
  return Object.keys(obj).reduce((result: {}, key: string): {} => ({
    ...result, [key.toLowerCase()]: obj[key],
  }), {});
}
