export class MissingParamError extends Error {
  constructor (paramNme: string) {
    super(`Missing param: ${paramNme}`)
    this.name = 'MissingParamError'
  }
}
