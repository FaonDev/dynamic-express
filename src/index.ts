import RegisterRoutes from './handler'
import Express from 'express'

export const expressApp = Express()
expressApp.use(Express.static('public'))
RegisterRoutes(expressApp)
expressApp.listen(80)