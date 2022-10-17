import { Request, Response } from 'express'
import { registerNewUser, loginUser } from '../services/auth.service'
import { handleHttp } from '../utils/error.handle'

const registerCtrl = async ({ body }: Request, res: Response) => {

    try {
        const responseUser = await registerNewUser(body)

        res.status(201).json(responseUser)
    } catch (error) {
        handleHttp(res, 'ERROR_REGISTER_USER')
    }
}

const loginCtrl = async ({ body }: Request, res: Response) => {
    
    try {
        const responseUser = await loginUser(body)
        if(responseUser === "PASSWORD_INCORRECT") {
            res.status(403)
            res.send(responseUser)
        }
        res.status(200).json(responseUser)
    } catch (error) {
        handleHttp(res, 'ERROR_AUTH_USER')
    }
}

export { registerCtrl, loginCtrl }