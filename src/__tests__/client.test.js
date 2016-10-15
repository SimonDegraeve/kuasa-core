/**
 * @flow
 */
import Client from '../client';


/**
 *
 */
test('Client with default properties', () => {
  const client = new Client({
    id: 1,
  });
  expect(client).toEqual({
    id: 1,
    type: 'confidential',
    secret: undefined,
    redirectionUriList: [],
    requireAuthentication: false,
    data: {},
  });
});

test('Client', () => {
  const client = new Client({
    id: 1,
    type: 'public',
    secret: '123456',
    redirectionUriList: ['http://website.com'],
    requireAuthentication: true,
    data: { hasSomething: true },
  });
  expect(client).toEqual({
    id: 1,
    type: 'public',
    secret: '123456',
    redirectionUriList: ['http://website.com'],
    requireAuthentication: true,
    data: { hasSomething: true },
  });
});
