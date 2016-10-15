/**
 * @flow
 */
import { ServerError } from '../errors';
import type { Grant } from '../types';


/**
 *
 */
export default class ResourceOwnerCredentialsGrant {
  constructor(): Grant {
    this.grantType = 'password';
    return this;
  }

  responseType: void;
  grantType: string;

  async validate() {
    return new ServerError();
  }
}
