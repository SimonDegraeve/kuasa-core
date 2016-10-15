/**
 * @flow
 */
import { ServerError } from '../errors';
import type { Grant } from '../types';


/**
 *
 */
export default class ImplicitGrant {
  constructor(): Grant {
    this.responseType = 'token';
    return this;
  }

  responseType: ?string;
  grantType: ?string;

  async validate() {
    return new ServerError();
  }
}
