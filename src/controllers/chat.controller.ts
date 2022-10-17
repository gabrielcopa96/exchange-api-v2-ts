import { Request, Response } from 'express'
import { getChatsByUsers, getOneChat } from '../services/chat.service'
import { handleHttp } from '../utils/error.handle'

const getChatById = async ({ params }: Request, res: Response) => {

    try {
        
        const { id } = params

        const chat = await getOneChat( id )

        res.status(200).json(chat)

    } catch (error) {
        handleHttp(res, "ERROR_NOT_FOUND")
    }
}

const getAllsChatsByUser = async ({ params }: Request, res: Response) => {

    try {
        
        const { id_user } = params

        const chatUser = await getChatsByUsers( id_user )

        res.status(200).json(chatUser)

    } catch (error) {
        
    }

}

export { getChatById, getAllsChatsByUser }