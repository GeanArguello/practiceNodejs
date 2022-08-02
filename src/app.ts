require('dotenv').config()
import { enviroment } from './config/varEntorno'
import app from './server/index'

const PORT = enviroment.PORT;

app.listen(PORT, ()=>{
    console.log('Servidor levantado en el puerto ' + PORT)
})
