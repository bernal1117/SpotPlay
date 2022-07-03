import { HttpCode } from './httpcode.js'

export const response = {
  succes: (req, res, message, status) => {
    const statusCode = status || HttpCode.OK // Recibiendo los codigos de respuesta desde httpcode
    const statusMessage = message || 'ok'
    res.status(statusCode).send({ // recibe el estado de la peticion
      reques: req.method + '' + req.url,
      error: false,
      status: statusCode,
      body: statusMessage
    })
  },
  error: (req, res, message, status) => {
    const statusCode = status || HttpCode.INTERNAL_SERVER_ERROR
    const statusMessage = message || 'Internal server error'
    res.status(statusCode).send({ // recibe el estado de la peticion
      request: req.method + '' + req.url,
      error: true,
      status: statusCode,
      body: statusMessage
    })
  }
}
