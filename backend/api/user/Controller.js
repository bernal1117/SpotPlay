// los controller se encargar de realizar la logica del negocio

class UserController {
  constructor (serviceUser, userModel, hashPassword) {
    this._service = serviceUser
    this._entity = userModel
    this._hashPassword = hashPassword
  }

  async createNewUser (user) { // POST
    console.log(user)
    if (user.username && user.email && user.password) {
      const newUser = new this._entity(user)
      console.log(newUser)
      newUser.encryptPassword(user.password, this._hashPassword)
      console.log(newUser)
      const response = await this._service.insertData('users', newUser)
      return (response, 'Created succesfully')
    } else {
      throw new Error('Missing parameters')
    }
  }

  async getAllUser () {
    const response = await this._service.all('users') // recibe algo
    return response
  }

  /* getAllUser () {
    const response = this._service.all('user')
    return response
  } */

  updateSong (song) {
    console.log(song)
    return 'updated a song'
  }

  async deleteUser () {
    const response = await this._service.delete() // recibe algo
    return response
  }
}

export default UserController
