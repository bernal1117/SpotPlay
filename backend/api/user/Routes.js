
export default class UserRouter {
  constructor (router, controller, response, httpCode, createUserValidation) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this._chekUser = createUserValidation
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/getuser', this.handleGetUser.bind(this))
    this._router.post('/signup', this._chekUser, this.handleSingUp.bind(this))
    // this._router.delete('/', this.handleDeleteSong.bind(this))
    // this._router.put('/', this.handlePutSong.bind(this))
  }

  handleSingUp (req, res) { // POST
    const result = this._ctrl.createNewUser(req.body)
    if (result instanceof Error) {
      this._response.error(req, res, result, this._httpCode.Error)
    }
    this._response.succes(req, res, result, this._httpCode.OK)
  }

  handleGetUser (req, res) {
    try {
      const result = this._ctrl.getAllUser()
      this._response.succes(req, res, result, this._httpCode.ok)
      if (result.length === 0) {
        this._response.succes(req, res, 'No hay usuarios', this._httpCode.not_found)
      }
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  handleDeleteSong (req, res) {
    console.log(req)
    res.send('soy el manejador de la ruta delete/user')
  }

  handlePutSong (req, res) {
    console.log(req)
    res.send('soy el manejador de la ruta put/user')
  }
}
