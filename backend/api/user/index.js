import UserController from './Controller.js'
import UserRouter from './Routes.js'
import User from '../../entity/User.js'
import { helpers } from '../../lib/helpers.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { validateCreteUser } from './validate.js'
import DBMongo from '../../store/DBMongo.js'
import { checkToken } from './secure.js'
export const userModule = (expressRouter) => {
  const userServices = new DBMongo()
  const userController = new UserController(userServices, User, helpers.encryptPassword, checkToken)
  const userRouter = new UserRouter(expressRouter, userController, response, HttpCode, validateCreteUser)
  return userRouter._router
}
