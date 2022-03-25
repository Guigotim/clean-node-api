export class InvalidParamError extends Error {
  constructor (paramNme: string) {
    super(`Invalid param: ${paramNme}`)
    this.name = 'InvalidParamError'
  }
}
