import AuthRoutes from './Routes.js'
import AuthController from './controller.js'
import Auth from '../../entity/Auth.js'
// import { DataJson } from '../../store/DataJson.js'
import { helpers } from '../../lib/helpers.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import DBMongo from '../../store/DBMongo.js'

export const authModule = (expressRouter) => {
  const authService = new DBMongo()
  const authController = new AuthController(authService, Auth, helpers.comparePassword, helpers.generateToken)
  const authRoute = new AuthRoutes(expressRouter, authController, response, HttpCode)
  return authRoute._router
}
