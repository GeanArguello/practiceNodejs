import express from 'express'
import { Request, Response } from 'express'
import router from '../routes';

const app = express();
const PORT = 8080;
//Middlewares

app.use(express.json());
app.get('/', (req, res)=>{ res.send('Servicio Arriba')});
app.use('', router);


export default app; 