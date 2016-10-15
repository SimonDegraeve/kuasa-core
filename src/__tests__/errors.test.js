/**
 * @flow
 */
import { HttpError, ServerError } from '../errors';


/**
 *
 */
test('HttpError', () => {
  const error = new HttpError(666, 'evil_error');
  expect(error).toBeInstanceOf(Error);
  expect(error.message).toBe('');
  expect(error.statusCode).toBe(500);
  expect(error.statusMessage).toBe('Internal Server Error');
  expect(error.rfcName).toBe('evil_error');
  expect(error.headers).toEqual({});
});

test('HttpError with message and headers', () => {
  const error = new HttpError(404, '', 'Something happened.', { headers: { A: 'headerA' } });
  expect(error).toBeInstanceOf(Error);
  expect(error.message).toBe('Something happened.');
  expect(error.statusCode).toBe(404);
  expect(error.statusMessage).toBe('Not Found');
  expect(error.rfcName).toBe('');
  expect(error.headers).toEqual({ a: 'headerA' });
});

test('ServerError', () => {
  const error = new ServerError();
  expect(error).toBeInstanceOf(Error);
  expect(error.statusCode).toBe(503);
  expect(error.statusMessage).toBe('Service Unavailable');
  expect(error.rfcName).toBe('server_error');
});
