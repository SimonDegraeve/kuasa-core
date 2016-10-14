declare module 'make-error' {
  declare class BaseError extends Error {
    constructor(message: ?string): this,
    message: string,
    name: string,
    stack: string,
  }
}
