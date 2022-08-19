import { Request, Response } from "express"
import { Users } from "../schemas";
import validateMail from "../utils/validateMail";


export const createUser = async (req: Request, res: Response): Promise<any> => {
    
    const { username, email, age, country } = req.body;

    try{
        if(!username || !email || !age || !country ){
            return res.status(400).json({
                message: 'Por favor completa los datos'
            });
        }
        //Valido que sea un mail

        if(!validateMail(email, res)){
            return res.status(400).json({
                message: 'Email incorrecto'
            })
        }
       

        const emailExist = await Users.findOne({
            where:{
                email: email
            }
        })

        if(emailExist){
            return res.status(400).json({message: "El email " + email + " ya existe, ingresa otro"})
        }

        const userCreated = await Users.create({
            userName: username,
            email: email,
            age: age,
            country: country,
        })

        res.status(200).json({
            message: "Usuario Creado",
            data: userCreated,
        })

    }catch(err:any){
        res.status(500).json({
            message: "Ocurrio un error al querer crear un nuevo usuario"
        });
    }
}

export const updateUser = async (req: Request, res: Response): Promise<any> =>{

    const { id } = req.params;
    const { username, email, age, country } = req.body;

    try {
        if(!validateMail(email, res)){
            return res.status(400).json({
                message: 'Email incorrecto'
            })
        }

        const userActualizado = {
            userName: username,
            email: email,
            age: age,
            country: country     
        }

        const updateUserResult:any= await Users.update(
            userActualizado,
            {where:{id: id}}
        );

        if(updateUserResult == 0){
            return res.status(404).json({
                message: 'No se encontro el usuario Id: ' + id
            })
        }
        res.status(200).json({
            message: 'Usuario Actualizado',
            data: userActualizado,
        })

    } catch (error:any) {
        /* console.log(error) */
        res.status(500).json({
            message: 'Ocurrio un error al querer traer un usuario',
            error: error,
        });
    }
}

export const getAllUsers = async (req: Request, res: Response): Promise<any> =>{
    try {
        const users = await Users.findAll();

        
        if(!users[0]){
            return res.status(404).json({
                message: 'No existen usuarios en la db'
            })
        };
        res.status(200).json({
            message: "All Users",
            data: users,
        })

    } catch (error) {
        res.status(500).json({
            message: 'Ocurrio un error al querer traer todos los usuarios',
            error: error,
        })
    }
}

export const getUser = async (req: Request, res: Response): Promise<any> =>{
    try {
        const { id } = req.params;    
        
        const getUserResult:any = await Users.findOne({
            where:{
                id: id,
            }
        });

        if(getUserResult === null){
            return res.status(404).json({
                message: "Usuario no encontrado"
            });
        }

        res.status(200).json({
            data: getUserResult,
        });

    } catch (error:any) {
        /* console.log(error) */
        res.status(500).json({
            message: 'Ocurrio un error al querer traer un usuario',
            error: error,
        });
    }
}

export const deleteAllUsers = async (req: Request, res: Response): Promise<any> =>{
    try {
        
        const allResult:any = await Users.findAll();

        let isDelete:any;

        for(const user of allResult) {
            isDelete = await Users.destroy({
                where:{
                    Id: user.dataValues.Id
                }
            })
        }
        if(!isDelete){
            res.status(404).json({
                message: 'No existen usuarios en la Base de Datos'
            })
        }
        res.status(200).json({
            message: 'Usuarios Eliminados',
            data: allResult,
        })
    } catch (error:any) {
        /* console.log(error) */
        res.status(500).json({
            message: 'Ocurrio un error al querer eliminar todos los usuarios',
            error: error,
        });
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<any> =>{

    const { email } = req.body;
    try {
        
        const deleteUserResult = await Users.destroy(
            {where:{ email }},
        )
        
        if(deleteUserResult == 0){
            res.status(404).json({
                message: "No se encontro usuario"
            })
        };

        res.status(200).json({
            message: 'El usuario ha sido eliminado',
            data: email
        })
    } catch (error:any) {
        /* console.log(error) */
        res.status(500).json({
            message: 'Ocurrio un error al querer eliminar todos los usuarios',
            error: error,
        });
    }
}
