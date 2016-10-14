/**
 * @flow
 */
type ObjectWithStringsAsKeys = {
  [key: string]: string,
};

export type Headers = ObjectWithStringsAsKeys;
export type Payload = ObjectWithStringsAsKeys;
export type Query = ObjectWithStringsAsKeys;
