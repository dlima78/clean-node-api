import express from 'express'
import setupMiddlewares from './middlewares'
import setupStaticFiles from './static-files'
import setupRoutes from './routes'

const app = express()
setupStaticFiles(app)
setupMiddlewares(app)
setupRoutes(app)

export default app
