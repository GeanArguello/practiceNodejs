require('dotenv').config();
import { enviroment } from './config/varEntorno';
import app from './server/index';
import { db } from './config/db';


(async ()=>{
   try{
    await db.authenticate();
    console.log('DB Funcionando');
   }catch(e){
    console.log('DB no funcionando ' + e)
   }
})();


const PORT = enviroment.PORT;

app.listen(PORT, ()=>{
    console.log('Servidor levantado en el puerto ' + PORT)
});
