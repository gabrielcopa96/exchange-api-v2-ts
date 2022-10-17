import { ModelQuestion, Question } from "../interfaces/question.interface"
import PublicationModel from "../models/publication"
import QuestionModel from "../models/question"
import QuestionXResponseModel from "../models/questionXresponse"


const getAllQuestions = async () => {
    
    const responseQuestion = await QuestionModel.find({})

    if(!responseQuestion) return "NOT_DATA_COLLECTIONS_QUESTIONS"

    return responseQuestion
}

const getOneQuestion = async (id: string) => {

    const responseQuestion = await QuestionModel.findById( id )

    if(!responseQuestion) return "NOT_DATA_COLLECTIONS_QUESTION"

    return responseQuestion
}

const newQuestion = async( body: ModelQuestion ) => {

    const { message, id_user, id_publication } = body

    // Creo mi nueva respuesta para luego obtener su id y apartir de este id crear el nuevo bloque
    // de questionxresponse a la espera de una respuesta
    const question = await QuestionModel.create({
        message,
        id_user
    })

    // Creo el nuevo bloque de questionxresponse, para luego asociarlo a la publicacion al cual pertenece
    const newQuestionxResponse = await QuestionXResponseModel.create({
        id_question: question._id
    })

    // Actualizo mi publicacion, agregandole el nuevo bloque de questionxresponse que se creo 
    const publication = await PublicationModel.findByIdAndUpdate(id_publication, {
        $push: { id_questionxresponse: newQuestionxResponse._id }
    }, { new: true })

    return {
        newQuestionxResponse,
        publication
    }

}

export { getAllQuestions, getOneQuestion, newQuestion }