/**
 * @flow
 */
import { ServerError } from '../errors';
import type { Grant } from '../types';


/**
 *
 */
export default class ClientCredentialsGrant {
  constructor(): Grant {
    this.grantType = 'client_credentials';
    return this;
  }

  responseType: void;
  grantType: string;

  async validate() {
    return new ServerError();
  }
}
