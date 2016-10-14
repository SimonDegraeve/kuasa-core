/**
 * @flow
 */
import typeIs from 'type-is';
import { toLowerCaseKeys } from './utils';
import type { Headers, Payload, Query } from './types';


/**
 *
 */
type RequestOptions = {
  method?: string,
  headers?: Headers,
  payload?: Payload,
  query?: Query,
};


/**
 *
 */
export default class Request {
  method: string;
  headers: Headers;
  payload: Payload;
  query: Query;

  constructor(options: RequestOptions = {}) {
    this.method = (options.method || 'GET').toLowerCase();
    this.headers = toLowerCaseKeys(options.headers);
    this.payload = options.payload || {};
    this.query = options.query || {};
  }

  is(types: string | Array<string>): boolean {
    return !!typeIs(this, types);
  }
}
