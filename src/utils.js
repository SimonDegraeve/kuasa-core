/**
 * @flow
 */
export function keysToLowerCase(obj: {} = {}): {} {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    newObj[key.toLowerCase()] = value;
  }
  return newObj;
}
