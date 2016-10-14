/**
 *
 */
import Request from './request';


/**
 *
 */
describe('Request', () => {
  it('returns a Request', () => {
    expect(new Request()).toEqual({
      method: 'get',
      headers: {},
      payload: {},
      query: {},
    });
  });

  it('returns a Request with normalized attributes', () => {
    expect(new Request({
      method: 'POST',
      headers: { HeaderKey: 'Header Value' },
    })).toEqual({
      method: 'post',
      headers: { headerkey: 'Header Value' },
      payload: {},
      query: {},
    });
  });

  it('does not infer the content-type when body is empty', () => {
    const request = new Request({
      headers: { 'content-type': 'application/json' },
    });
    expect(request.is('json')).toBe(false);
  });

  it('infers the content-type', () => {
    const request = new Request({
      headers: { 'content-type': 'application/json', 'content-length': 0 },
    });
    expect(request.is('json')).toBe(true);
  });
});
