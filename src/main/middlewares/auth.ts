import { adaptMiddleware } from '@/main/adapters/express-middleware-adapter'
import { makeAuthMiddlewareController } from '@/main/factories/middlewares/auth-middleware-factory'

export const auth = adaptMiddleware(makeAuthMiddlewareController())
