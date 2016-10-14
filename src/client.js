/**
 * @flow
 */
type ClientId = string | number;

type ClientType = 'public' | 'confidential';

type ClientOptions = {
  id: ClientId,
  secret?: string,
  type?: ClientType,
  redirectionUriList?: Array<string>,
  data?: {},
};


/**
 * @see https://tools.ietf.org/html/rfc6749#section-2
 */
export default class Client {
  id: ClientId;
  secret: ?string;
  type: ClientType;
  redirectionUriList: Array<string>;
  data: { [key: any]: any };

  constructor(options: ClientOptions) {
    this.id = options.id;
    this.secret = options.secret;
    this.type = options.type || 'confidential';
    this.redirectionUriList = options.redirectionUriList || [];
    this.data = options.data || {};
  }
}
