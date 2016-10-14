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
});
