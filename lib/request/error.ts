export class HttpError extends Error {
  readonly status: number
  constructor(message: string, status: number, options?: ErrorOptions) {
    super(message, options)
    this.status = status
  }
}
