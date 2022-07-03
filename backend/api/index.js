import { Server } from './Server.js'
import { config } from '../config/default.js'

function main (api) {
  const server = new Server(api) // instanciando clase Server()
  server.startServer() // Ejecutando el metodo del servidor para que funcione
}

main(config.api) // pasando el paquete config y mandando solo lo que vamos a usar, objetos del api en ese archivo
