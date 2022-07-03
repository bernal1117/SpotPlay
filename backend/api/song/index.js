import express from 'express'
import SongController from './Controller.js'
import SongRouter from './Router.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { DataJson } from '../../store/DataJson.js'
import Song from '../../entity/Song.js'

export const songModule = () => {
  const servicesSong = new DataJson()
  const songControllers = new SongController(servicesSong, Song)
  const songRouter = new SongRouter(express.Router, songControllers, HttpCode, response)
  return songRouter._router
}
