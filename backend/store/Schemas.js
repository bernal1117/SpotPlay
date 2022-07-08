import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  _username: { type: String, required: true },
  _email: { type: String, required: true },
  _password: { type: String, required: true }
})

const SongSchema = new mongoose.Schema({
  _title: { type: String, required: true },
  _uri: { type: String, required: true },
  _duration: { type: String, required: true },
  _img: { type: String, required: true },
  _idArtist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: false },
  _idAlbum: { type: mongoose.Schema.Types.ObjectId, ref: 'Album', required: false },
  _idGenre: { type: Number, required: true }
})

const AlbumSchema = new mongoose.Schema({
  _title: { type: String, required: true },
  _image: { type: String, required: true },
  _artist: { type: String, required: true }
})

const ArtistSchema = new mongoose.Schema({
  _name: { type: String, required: true },
  _image: { type: String, required: true }
})
const AuthSchema = new mongoose.Schema({
  _username: { type: String, required: true },
  _password: { type: String, required: true }
})

const userModel = mongoose.model('User', UserSchema)
const songModel = mongoose.model('Song', SongSchema)
const authModel = mongoose.model('Auth', AuthSchema)
const artistModel = mongoose.model('Artist', ArtistSchema)
const albumModel = mongoose.model('Album', AlbumSchema)

export const models = {
  users: userModel,
  songs: songModel,
  auths: authModel,
  artist: artistModel,
  albums: albumModel
}
