/**
 * @flow
 */
import Request from './request';


/**
 *
 */
test('Request', () => {
  const request = new Request();
  expect(request).toEqual({
    method: 'get',
    headers: {},
    payload: {},
    query: {},
  });
});

test('Request with normalized attributes', () => {
  const request = new Request({
    method: 'POST',
    headers: { A: 'HeaderA' },
  });
  expect(request).toEqual({
    method: 'post',
    headers: { a: 'HeaderA' },
    payload: {},
    query: {},
  });
});

test('Request does not infer content-type when body is empty', () => {
  const request = new Request({ headers: { 'content-type': 'application/json' } });
  expect(request.is('json')).toBe(false);
});

test('Request infers the content-type', () => {
  const request = new Request({ headers: { 'content-type': 'application/json', 'content-length': 0 } });
  expect(request.is('json')).toBe(true);
});
