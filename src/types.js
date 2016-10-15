/**
 * @flow
 */
import type { HttpError } from './errors';
import type Response from './response';


/**
 *
 */
export type Headers = { [key: string]: string | number | void | null };
export type Payload = { [key: string]: string | number | void | null };
export type Query = { [key: string]: string | number | void | null };


/**
 *
 */
export type Result = HttpError | Response;


/**
 *
 */
export interface Grant {
  responseType: ?string,
  grantType: ?string,
  validate: () => Promise<Result>,
}


/**
 *
 */
export interface AuthenticationScheme {
  validate: () => Promise<*>,
}
