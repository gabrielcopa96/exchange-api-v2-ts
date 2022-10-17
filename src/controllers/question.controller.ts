import { Request, Response } from 'express'
import { getAllQuestions, getOneQuestion, newQuestion } from '../services/question.service'
import { handleHttp } from '../utils/error.handle'

const getQuestions = async (req: Request, res: Response) => {

    try {
        
        const responseQuestion = await getAllQuestions()

        res.status(200).json(responseQuestion)

    } catch (error) {
        handleHttp(res, "ERROR_GET_QUESTIONS")
    }
}

const getQuestion = async ({ params }: Request, res: Response) => {

    try {

        const { id } = params

        const responseQuestion = await getOneQuestion( id )

        res.status(200).json(responseQuestion)
        
    } catch (error) {
        handleHttp(res, "ERROR_GET_QUESTION")
    }
}

const createQuestion = async ({ body }: Request, res: Response) => {

    try {
        
        const question = await newQuestion( body )

        res.status(201).json(question)

    } catch (error) {
        handleHttp(res, "ERROR_CREATE_QUESTION")
    }
}

export { getQuestions, getQuestion, createQuestion }