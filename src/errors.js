/**
 * @flow
 */
import { BaseError } from 'make-error';
import statuses from 'statuses';
import { keysToLowerCase } from './utils';


/**
 *
 */
type Headers = {
  [key: string]: string,
};

type ErrorData = {
  headers?: Headers,
};


/**
 *
 */
export class HttpError extends BaseError {
  constructor(statusCode: number, rfcName: string, message: ?string, data: ?ErrorData = {}) {
    super(message);

    this.statusCode = statusCode;
    this.statusMessage = statuses[statusCode];
    this.rfcName = rfcName;
    this.headers = keysToLowerCase(data.headers);

    if (!this.statusMessage) {
      this.statusCode = 500;
      this.statusMessage = statuses[500];
    }
  }
  statusCode: number;
  statusMessage: string;
  rfcName: string;
  headers: Headers;
}


/**
 * @see https://tools.ietf.org/html/rfc6749#section-4.1.2.1
 */
export class ServerError extends HttpError {
  constructor(message: ?string, data: ?ErrorData) {
    super(503, 'server_error', message, data);
  }
}
