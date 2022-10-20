import { Request, Response } from 'express'
import { getAllProducts, getOneProduct, newProduct } from '../services/product.service'
import { handleHttp } from '../utils/error.handle'

const getProducts = async (req: Request, res: Response) => {

    try {
        
        const responseProduct = await getAllProducts()

        res.status(200).json(responseProduct)

    } catch (error) {
        handleHttp(res, "ERROR_NOT_FOUND", error)
    }
}

const getProduct = async ({ params }: Request, res: Response) => {

    try {
        const { id } = params

        const responseProduct = await getOneProduct( id )

        res.status(200).json(responseProduct)

    } catch (error) {
        handleHttp(res, "ERROR_NOT_FOUND", error)
    }
}

const createProduct = async ({ body }: Request, res: Response) => {

    try {

        const responseProduct = await newProduct( body )

        res.status(201).json(responseProduct)
        
    } catch (error) {
        handleHttp(res, "ERROR_NOT_FOUND", error)
    }
}

export { getProducts, getProduct ,createProduct }