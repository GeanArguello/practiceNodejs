import { Request, Response } from "express"
import { UserJWT } from '../schemas/index'
import { enviroment } from '../config/varEntorno'
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

export const register = async (req: Request, res: Response): Promise<any> => {
    try {
        const { username, email, password } = req.body;

        // valido que no falte nada
        if(!username || !email || !password){
            return res.status(404).json({
                message: 'Datos ingresados no validos'
            })
        }
        
        //Consulto si existe el email
        const isEmailExist = await UserJWT.findOne({
            where:{
                email,
            }
        }); 
        
        if(isEmailExist){ return res.status(400).json({ message: "Este email ya esta registrado"})}



        //Encripto en Password
        const rounds = 12;
        const passEncrypted = await bcrypt.hash(password, rounds)
;

        //Creo el usuario en la DB
        const createUserResult:any = await UserJWT.create({
            userName: username,
            email,
            password: passEncrypted
        });
        

        // Creo el token JWT mandandole el id del user de la db, el secret y el tiempo de expiracion
        const token = jwt.sign({id: createUserResult.Id}, enviroment.SECRET_TOKEN_JWR, {expiresIn: 60 * 60 * 24})
    
        //Devuelvo el ok con el token
        res.status(200).json({
            message: 'Usuario Registrado',
            auth: true,
            token: token,
        })

    } catch (error) {
        res.send(error)
    }
}

export const profile = async (req: Request, res: Response): Promise<any> => {
    try {
        //Recibo el token por el header
        const token = req.headers['auth'];

        //Valido que exista
        if (!token) {
            return res.status(401).json({
                message: 'No hay token'
            })
        }

        //Decodifico pasandole el token y secret 
        const tokenDecoded: any = jwt.verify(token, enviroment.SECRET_TOKEN_JWR);

        //Saco el id del token decodificado
        const { id } = tokenDecoded;

        //Consulto a DB por id 
        const getProfile: any = await UserJWT.findOne({where:{Id: id},});

        if(!getProfile){
            return res.status(400).json({
                message: 'No exist profile'
            })
        }

        res.status(200).json({
            message: 'Bienvenido',
            getProfile
        })
    } catch (error) {
        res.send(error)
    }
}


export const login = async (req: Request, res: Response): Promise<any> => {
    try {
        res.send('Soy el login')
    } catch (error) {
        res.send(error)
    }
}


