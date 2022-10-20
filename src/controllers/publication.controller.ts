import { Request, Response } from 'express'
import { deletePublication, getOnePublication, newPublication, selectAllOrCategory } from '../services/publication.service'
import { handleHttp } from '../utils/error.handle'


const getPublication = async ({ params }: Request, res: Response) => {

    try {
        
        const { id } = params

        const responsePublication = await getOnePublication( id )
        
        res.status(200).json(responsePublication)

    } catch (error) {
        handleHttp(res, "ERROR_NOT_FOUND", error)
    }
}

const searchPublicationsBy = async ({ params }: Request, res: Response) => {

    try {
        
        const { category } = params

        const responsePublication = await selectAllOrCategory( category )
        
        res.status(200).json(responsePublication)

    } catch (error) {
        handleHttp(res, "ERROR_NOT_FOUND", error)
    }

}

const createPublication = async ({ body }: Request, res: Response) => {

    try {
        
        const responsePublication = await newPublication( body )

        res.status(201).json(responsePublication)
        
    } catch (error) {
        handleHttp(res, "ERROR_NOT_FOUND", error)
    }

}

const deleteLogicPublication = async ({ params }: Request, res: Response) => {

    try {
        
        const { id } = params

        const publicationEliminated = await deletePublication( id )

        res.status(202).json(publicationEliminated)

    } catch (error) {
        handleHttp(res, "ERROR_NOT_DELETE_PUBLICATION", error)
    }
}

export { getPublication, searchPublicationsBy, createPublication, deleteLogicPublication }