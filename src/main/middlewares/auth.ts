import { adaptMiddleware } from '../adapters/express-middleware-adapter'
import { makeAuthMiddlewareController } from '../factories/middlewares/auth-middleware-factory'

export const auth = adaptMiddleware(makeAuthMiddlewareController())
