class Song {
  constructor (song) {
    this._id = null
    this._title = song.title
    this._uri = song.uri
    this._duration = song.duration
    this._img = song.img
    this._idArtist = song.idArtist
    this._idGenre = song.idGenre

    // this._album = song.album;
  }

  get id () {
    return this._id
  }

  set id (id) {
    return this._id
  }

  returnNumber () {
    return 5
  }
}
export default Song
