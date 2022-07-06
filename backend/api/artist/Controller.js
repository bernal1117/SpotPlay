
class ArtistController {
  constructor (serviceArtist, artist) {
    this._service = serviceArtist
    this._entity = artist
  }

  getAllArtist () { // GET
    const response = this._service.all('artist')
    return response
  }

  createNewArtist (artist) { // POST
    const newArtist = new this._entity(artist)
    const response = this._service.save('artist', newArtist)
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

export default ArtistController
