declare module 'make-error' {
  declare class BaseError extends Error {
    message: string,
    name: string,
    stack: string,
    constructor(message: ?string): this,
  }
}
