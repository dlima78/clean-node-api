import { HttpResponse } from '../protocols/http'
import { ServerError } from '../errors/server-error'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const ok = (data): HttpResponse => ({
  statusCode: 200,
  body: data
})
