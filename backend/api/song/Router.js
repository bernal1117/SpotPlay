import { HttpCode } from '../../response/httpcode.js'
import { response } from '../../response/response.js'

class SongRouter {
  constructor (router, controller) {
    this._router = router() //  instancia del enrutador de express
    this._ctrl = controller
    this._httpcode = HttpCode
    this._response = response
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/', this.handleGetSong.bind(this)) // bind para cambiar el contexto del this y que lea el handleGetSong y usar controllers
    this._router.post('/', this.handlePostSong.bind(this))
    this._router.delete('/', this.handleDeleteSong.bind(this))
    this._router.put('/', this.handlePutSong.bind(this))
  }

  //  METODOS PARA REFACTORIZAR
  handleGetSong (req, res) {
    const result = this._ctrl.getAllSong()
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handlePostSong (req, res) {
    const song = req.body
    const result = this._ctrl.createNewSong(song)
    this._response.succes(req, res, result, this._httpcode.ACCEPTED)
  }

  handleDeleteSong (req, res) {
    console.log(req)
    res.send('Soy el manejador de la ruta delete/Song')
  }

  handlePutSong (req, res) {
    console.log(req)
    res.send('Soy el manejador de la ruta put/Song')
  }
}

export default SongRouter
