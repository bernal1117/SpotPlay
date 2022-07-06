
class PlaylistController {
  constructor (servicePlaylist, playlist) {
    this._service = servicePlaylist
    this._entity = playlist
  }

  getAllPlaylist () { // GET
    const response = this._service.all('playlist')
    return response
  }

  createNewPlaylist (playlist) { // POST
    const newPlaylist = new this._entity(playlist)
    const response = this._service.save('playlist', newPlaylist)
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

export default PlaylistController
