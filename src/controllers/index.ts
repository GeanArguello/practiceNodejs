import { Request, Response } from "express"


export const createUser = (req: Request, res: Response): any => {
    res.send('Estoy desde el controller')
}