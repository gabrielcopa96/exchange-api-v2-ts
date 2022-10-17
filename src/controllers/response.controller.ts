import { Request, Response } from 'express'
import { getAllResponses, getOneResponse, newResponse } from '../services/response.service'
import { handleHttp } from '../utils/error.handle'


const getResponses = async (req: Request, res: Response) => {

    try {
        
        const responses = await getAllResponses()

        res.status(200).json(responses);

    } catch (error) {
        handleHttp(res, 'ERROR_GET_RESPONSES')
    }
}

const getResponse = async ({ params }: Request, res: Response) => {


    try {
        
        const { id } = params

        const response = await getOneResponse(id)

        res.status(200).json(response)

    } catch (error) {
        handleHttp(res, 'ERROR_GET_RESPONSE')
    }
}

const createResponse = async ({ body }: Request, res: Response) => {

    try {
        
        const responseNew = await newResponse(body)

        res.status(201).json(responseNew)


    } catch (error) {
        handleHttp(res, 'ERROR_CREATE_RESPONSE')
    }
}

export { getResponses, getResponse, createResponse }