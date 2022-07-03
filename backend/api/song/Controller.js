
//Los controladores se encargan de realizar toda la logica del negocio => ejemplo: calculos de productos, operaciones de aplicacion, etc. 

class SongController{
constructor (serviceSong, song) {
  this._service = serviceSong
  this._entity = song
}

getAllSong () {  //GET
  const response = this._service.all('song')
  return response 
}

createNewSong (song) { //POST
  const newSong = new this._entity(song)
  const response = this._service.save('song', newSong)
  return response
}

updateSong (song) { //PUT
  console.log(song)
  return 'Updated song'
}

deleteSong (id) { //DELETE
  console.log(id)
  return 'Deleted song'
}

}

export default SongController