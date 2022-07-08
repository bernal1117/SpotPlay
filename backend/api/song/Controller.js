
//  Los controladores se encargan de realizar toda la logica del negocio => ejemplo: calculos de productos, operaciones de aplicacion, etc.

class SongController {
  constructor (serviceSong, song) {
    this._service = serviceSong
    this._entity = song
  }

  async getAllSong () { // GET
    const response = await this._service.all('songs')
    return response
  }

  async createNewSong (song) { // POST
    const newSong = await new this._entity(song)
    const response = this._service.insertData('songs', newSong) // insertData viene de DBMongo.js
    return response
  }

  updateSong (song) { //  PUT
    console.log(song)
    return 'Updated song'
  }

  deleteSong (id) { //  DELETE
    console.log(id)
    return 'Deleted song'
  }
}

export default SongController
