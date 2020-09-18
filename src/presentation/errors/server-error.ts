export class ServerError extends Error {
  constructor (stack: string) {
    super('Aconteceu um erro inexperado tente mais tarde')
    this.name = 'ServerError'
    this.stack = stack
  }
}
