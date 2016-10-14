/**
 * @flow
 */
import Client from './client';


/**
 *
 */
test('Client', () => {
  const client = new Client({
    id: 1,
    secret: '123456',
    redirectionUriList: ['http://website.com'],
    data: { hasSomething: true },
  });
  expect(client).toEqual({
    id: 1,
    type: 'confidential',
    secret: '123456',
    redirectionUriList: ['http://website.com'],
    data: { hasSomething: true },
  });
});
