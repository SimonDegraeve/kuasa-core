/**
 *
 */
import { HttpError, ServerError } from './errors';


/**
 *
 */
describe('Errors', () => {
  it('creates a basic HttpError', () => {
    const error = new HttpError();
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe('');
    expect(error.statusCode).toBe(500);
    expect(error.statusMessage).toBe('Internal Server Error');
    expect(error.rfcName).toBe(undefined);
    expect(error.headers).toEqual({});
  });

  it('creates a basic HttpError with message and headers', () => {
    const error = new HttpError('Something happened.', { headers: { HeaderKey: 'Header Value' } });
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe('Something happened.');
    expect(error.statusCode).toBe(500);
    expect(error.statusMessage).toBe('Internal Server Error');
    expect(error.rfcName).toBe(undefined);
    expect(error.headers).toEqual({ headerkey: 'Header Value' });
  });

  it('creates a ServerError', () => {
    const error = new ServerError();
    expect(error).toBeInstanceOf(Error);
    expect(error.statusCode).toBe(503);
    expect(error.statusMessage).toBe('Service Unavailable');
    expect(error.rfcName).toBe('server_error');
  });
});
