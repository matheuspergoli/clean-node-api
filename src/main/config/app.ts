import express from 'express'
import setupRoutes from './routes'
import setupMiddlewares from './middlewares'

export const app = express()
setupMiddlewares(app)
setupRoutes(app)
