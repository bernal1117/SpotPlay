class Playlist {
  constructor (playlist) {
    this._id = null
    this._title = playlist.title
    this._img = playlist.img
    // this._song = playlist.song;
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
export default Playlist
