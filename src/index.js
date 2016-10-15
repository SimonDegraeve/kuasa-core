/**
 * @flow
 */
import type { Grant, AuthenticationScheme } from './types';
import type Request from './request';

type Config = {
  grants: Array<Grant>,
  authenticationSchemes: Array<AuthenticationScheme>,
};


/**
 *
 */
export default class OAuthFlow {
  constructor(config: Config) {

  }

  config: Config;

  async authorize(request: Request) {
    const grant = this.config.grants.find(({ responseType }) => responseType === request.query.response_type);
    if (typeof grant !== 'undefined') {
      return grant.validate(this.config, request);
    }
    else {
      // Error
    }
  }

  async exchange(request: Request) {
    const grant = this.config.grants.find(({ grantType }) => grantType === request.query.grant_type);
    if (typeof grant !== 'undefined') {
      return grant.validate(this.config, request);
    }
    else {
      // Error
    }
  }
}
