import { Request, Response } from 'express'
import { getAllQuestionxResponses } from '../services/questionxresponse.service'
import { handleHttp } from '../utils/error.handle'


const getQuestionXResponses = async (req: Request, res: Response) => {

    try {
        
        const questionxresponse = await getAllQuestionxResponses()

        res.status(200).json(questionxresponse)

    } catch (error) {
        handleHttp(res, "ERROR_NOT_FOUND", error)
    }
}

export { getQuestionXResponses }