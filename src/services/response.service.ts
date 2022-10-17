import { Response } from 'express'
import { ModelResponse } from '../interfaces/response.interface';
import QuestionXResponseModel from '../models/questionXresponse';
import ResponseModel from '../models/response'


const getAllResponses = async () => {

    const responseData = await ResponseModel.find({})

    if(!responseData) return "NOT_DATA_COLLECTIONS_RESPONSES"
    
    return responseData

}

const getOneResponse = async (id: string) => {

    const responseData = await ResponseModel.findById( id )

    if(!responseData) return "NOT_DATA_RESPONSE"

    return responseData

}

const newResponse = async (body: ModelResponse) => {

    const { message, id_user, id_questionxrepsonse } = body

    const createRegisterResponse = await ResponseModel.create({
        message,
        id_user
    })

    await QuestionXResponseModel.findByIdAndUpdate(id_questionxrepsonse, {
        id_response: createRegisterResponse._id
    })

    return createRegisterResponse
}


export { getAllResponses, getOneResponse ,newResponse }
