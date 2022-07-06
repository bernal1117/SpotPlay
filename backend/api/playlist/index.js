import express from 'express'
import PlaylistController from './Controller.js'
import PlaylistRouter from './Router.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { DataJson } from '../../store/DataJson.js'
import Playlist from '../../entity/Playlist.js'

export const playlistModule = () => {
  const servicesPlaylist = new DataJson()
  const playlistControllers = new PlaylistController(servicesPlaylist, Playlist)
  const playlistRouter = new PlaylistRouter(express.Router, playlistControllers, HttpCode, response)
  return playlistRouter._router
}
