import express from 'express'
import ArtistController from './Controller.js'
import ArtistRouter from './Router.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { DataJson } from '../../store/DataJson.js'
import Artist from '../../entity/Artist.js'

export const artistModule = () => {
  const servicesArtist = new DataJson()
  const artistControllers = new ArtistController(servicesArtist, Artist)
  const artistRouter = new ArtistRouter(express.Router, artistControllers, HttpCode, response)
  return artistRouter._router
}
