import { HttpCode } from '../../response/httpcode.js'
import { response } from '../../response/response.js'

class ArtistRouter {
  constructor (router, controller) {
    this._router = router() //  instancia del enrutador de express
    this._ctrl = controller
    this._httpcode = HttpCode
    this._response = response
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/getartist', this.handleGetArtist.bind(this)) // bind para cambiar el contexto del this y que lea el handleGetArtist y usar controllers
    this._router.post('/newartist', this.handlePostArtist.bind(this))
    this._router.delete('/deleteartist', this.handleDeleteSong.bind(this))
    // this._router.put('/', this.handlePutSong.bind(this))
  }

  //  METODOS PARA REFACTORIZAR
  handleGetArtist (req, res) {
    const result = this._ctrl.getAllArtist()
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handlePostArtist (req, res) {
    const playlist = req.body
    const result = this._ctrl.createNewArtist(playlist)
    this._response.succes(req, res, result, this._httpcode.ACCEPTED)
  }

  handleDeleteSong (req, res) {
    console.log(req)
    res.send('Soy el manejador de la ruta delete/Artist')
  }

  handlePutSong (req, res) {
    console.log(req)
    res.send('Soy el manejador de la ruta put/Artist')
  }
}

export default ArtistRouter
