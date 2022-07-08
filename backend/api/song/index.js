import express from 'express'
import SongController from './Controller.js'
import SongRouter from './Router.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import Song from '../../entity/Song.js'
import { chekToken } from './secure.js'
import DBMongo from '../../store/DBMongo.js'

export const songModule = () => {
  const servicesSong = new DBMongo()
  const songControllers = new SongController(servicesSong, Song)
  const songRouter = new SongRouter(express.Router, songControllers, HttpCode, response, chekToken)
  return songRouter._router
}
