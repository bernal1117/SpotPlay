import mongoose from 'mongoose'
import { config } from '../config/default.js'

const mongodb = async () => {
  try {
    let db = await mongoose.connect(config.dbMongo.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`MongoDB connected: ${db.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}

mongodb()
