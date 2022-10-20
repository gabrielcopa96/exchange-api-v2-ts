import { Request, Response } from 'express'
import { JwtPayload } from 'jsonwebtoken'
import { insertCategory, getAllCategories, getOneCategory } from '../services/category.service'
import { handleHttp } from '../utils/error.handle'

interface RequestExt extends Request {
    user?: string | JwtPayload
}

const createCategory = async ( { body }: Request, res: Response ) => {
    try {
        
        const responseCategory = await insertCategory( body ) 

        res.status(201).json(responseCategory)

    } catch (error) {
        handleHttp(res, 'ERROR_CREATE_CATEGORY', error)
    }
}

const getCategory = async ( { params }: Request, res: Response ) => {
    try {
        
        const { id }  = params
        const responseCategory = await getOneCategory( id )

        res.status(200).json(responseCategory)

    } catch (error) {
        handleHttp(res, 'ERROR_GET_CATEGORY', error)
    }
}

const getCategories = async ( req: RequestExt, res: Response ) => {
    try {

        const getResponseCategories = await getAllCategories()

        res.status(200).json({
            data: getResponseCategories,
            user: req.user
        });

    } catch (error) {
        handleHttp(res, 'ERROR_GET_CATEGORIES', error)
    }
}

export { createCategory ,getCategory, getCategories }