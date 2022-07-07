import mongoose from 'mongoose'
import { config } from '../config/default.js'

const mongodb = async () => {
  try {
    const db = await mongoose.connect(config.dbMongo.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`MongoDB connected: ${db.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}

mongodb()
// Crear un esquema para la base de datos
const userSchema = new mongoose.Schema({
  _username: {
    type: String,
    required: true
  },
  _email: {
    type: String,
    required: true
  },
  _password: {
    type: String,
    required: true
  }
})

// Para interactuar con mongoose y sus metodos
const userModel = mongoose.model('User', userSchema)

class DBMongo {
  async insertData (data) {
    const newUser = userModel(data)
    const res = await newUser.save()
    console.log(res)
    return 'OK'
  }

  async all () {
    const res = await userModel.find()
    return JSON.stringify(res)
  }

  async delete (id) {
    const res = await userModel.findByIdAndDelete(id)
    return res
  }

  async update (id, data) {
    const res = await userModel.findByIdAndUpdate(id, data)
    return res
  }
}

const test = new DBMongo()
// test.update('62c7090e1d89c2a0f1de58a0', { _email: 'cambio@email.com' }).then(result => { console.log(result) }, error => { console.log(error) })
// test.delete('62c70718f5aa70b4d9a7309c').then(result => { console.log(result) }, error => { console.log(error) })
// test.all().then(result => { console.log(result) }, error => { console.log(error) })
test.insertData({ _username: 'test3', _email: 'email3', _password: '123' }).then(result => { console.log(result) }, error => { console.log(error) })