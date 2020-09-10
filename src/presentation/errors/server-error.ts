export class ServerError extends Error {
  constructor () {
    super('Aconteceu um erro inexperado tente mais tarde')
    this.name = 'ServerError'
  }
}
