import { Request, Response } from 'express'
import { getAllExchanges, newExchange } from '../services/exchange.service'
import { handleHttp } from '../utils/error.handle'

const createExhange = async ({ body }: Request, res: Response) => {

    try {

        const exchanges = await newExchange( body )

        res.status(201).json(exchanges)

    } catch (error) {
        handleHttp(res, "ERROR_NOT_FOUND_EXCHANGE")
    }
}

const getExchanges = async (req: Request, res: Response) => {

    try {
        
        const exchanges = await getAllExchanges()

        res.status(200).json(exchanges)

    } catch (error) {
        handleHttp(res, "ERROR_NOT_FOUND_EXCHANGES")
    }
}

export { createExhange, getExchanges }

