
export default class UserRouter {
  constructor (router, controller, response, httpCode, createUserValidation, checkToken) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this._chekUser = createUserValidation
    this._checkToken = checkToken
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/getuser', /* this._checkToken */ this.handleGetUser.bind(this)) // usar expresiones regulares con las querys string
    this._router.post('/signup', this._chekUser, this.handleSingUp.bind(this)) // /signup/:parametro para enviar parametros desde la ruta
    this._router.delete('/deleteuser', this.handleDeleteUser.bind(this))
    this._router.put('/updateuser', this.handlePutSong.bind(this))
  }

  async handleSingUp (req, res) { // POST
    const result = await this._ctrl.createNewUser(req.body)
    // const para1 = req.params.parametro
    // console.log(para1)
    // res.json({"message": "Bien hecho"}) esto para recibir parametros en la ruta
    if (result instanceof Error) {
      this._response.error(req, res, result, this._httpCode.Error)
    }
    this._response.succes(req, res, result, this._httpCode.OK)
  }

  async queryString (req, res) { // POST
    if (Object.keys(req.query).length > 0) {
      console.log(req.query)
      console.log('Correcto')
    } else {
      console.log('No hay query')
    }
    const para1 = req.query.parametros
    console.log(para1)
    // res.json({ 'message': "Bien hecho" }) // esto para recibir parametros en la ruta
  }

  async handleGetUser (req, res) {
    try {
      const result = await this._ctrl.getAllUser()
      this._response.succes(req, res, result, this._httpCode.ok)
      if (result.length === 0) {
        this._response.succes(req, res, 'No hay usuarios', this._httpCode.not_found)
      }
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  async handleDeleteUser (req, res) {
    try {
      const result = await this._ctrl.deleteUser() // para recibir los datos se usa req.body como en el post osea en el signup
      this._response.succes(req, res, result, this._httpCode.ok)
      if (result.length === 0) {
        this._response.succes(req, res, 'No hay usuarios', this._httpCode.not_found)
      }
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  handlePutSong (req, res) {
    console.log(req)
    res.send('soy el manejador de la ruta put/user')
  }
}
