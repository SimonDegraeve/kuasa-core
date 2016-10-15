/**
 * @flow
 */
import { ServerError } from '../errors';
import type { Grant } from '../types';


/**
 *
 */
export default class AuthorizationCodeGrant {
  constructor(): Grant {
    this.responseType = 'code';
    this.grantType = 'authorization_code';
    return this;
  }

  responseType: string;
  grantType: string;

  async validate() {
    return new ServerError();
  }
}
