import  express  from 'express';
import cors from 'cors'
import morgan from 'morgan';
//Importacion de modulos
import {userModule} from './user/index.js'
import {songModule} from './song/index.js'

export class Server{
  constructor (config) {
    this._app = express() //almacena la instancia de express
    this._port = config.port //almacena la variable de entorno port  
    this._host = config.hostname //almacena la variable de entorno host 
    this._nameapp = config.name //almacena la variable de entorno name 
    this.setMiddlewares()
    this.setRoutes()
  }
  
  //Para setear Middlewares en este caso el de express que viene por defecto
  setMiddlewares(){ //Guardia que acepta solo un tipo de dato = en este caso json
    this._app.use(express.json())
    this._app.use(express.urlencoded({extended: true}))
    this._app.use(cors())
    this._app.use(morgan('dev')) //le decimos a morgan que estamos en un entorno de desarrollo (dev)
  }

  //Declarando rutas por modulos
  setRoutes(){
    this._app.use('/api/v1/song', songModule())
    this._app.use('/api/v1/user', userModule(express.Router))
  }

  //Metodo que inicia servidor 
  startServer(){
    this._app.set('hostname', this._host)

    this._app.listen(this._port, ()=>{
      console.log(`${this._nameapp} is running on htpp//${this._host}:${this._port}`)
    })
    this._app.get('/soyunaruta', (req, res)=>{ //request response
      console.log(req)
      res.send('request recbido')
    })
   
  }
}




/* LO MISMO QUE LA CLASE Server()
const app = express() //instanciando express
const port = 3000       //instanciando el puerto

app.get('/soyunaruta', (req, res)=>{ //request response
  console.log(req)
  res.send('request recbido')
})

app.listen(port, function() { //creando servidor 
  console.log('Servidor inciado')
})
*/