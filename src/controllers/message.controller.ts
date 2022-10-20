import { Request, Response } from 'express'
import { getAllMessages, getOneMessage, newMessage } from '../services/message.service'
import { handleHttp } from '../utils/error.handle'

const getMessages = async (req: Request, res: Response) => {

    try {
        const responseMessages = await getAllMessages()
        res.status(200).json(responseMessages)
    } catch (error) {
        handleHttp(res, "ERROR_GET_MESSAGES", error)
    }
}

const getMessage = async ({ params }: Request, res: Response) => {

    try {
        const { id } = params
        const responseMessage = await getOneMessage( id )
        res.status(200).json(responseMessage)
    } catch (error) {
        handleHttp(res, "ERROR_GET_MESSAGE", error)   
    }
}

const createMessage = async ({ body }: Request, res: Response) => {

    try {
        const responseMessages = await newMessage( body )
        res.status(201).json(responseMessages)
    } catch (error) {
        handleHttp(res, "ERROR_CREATE_MESSAGE", error)
    }
}

export { getMessages, getMessage, createMessage }