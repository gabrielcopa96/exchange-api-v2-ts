import { Schema, Types, model, Model } from "mongoose";
import { ResponseXQuestion } from '../interfaces/questionxresponse.interface'

const questionxresponseSchema = new Schema<ResponseXQuestion>(
    {
        id_question: {
            type: Types.ObjectId, ref: 'Questions'
        },
        id_response: {
            type: Types.ObjectId, ref: 'Responses'
        }
    },
    {
        versionKey: false
    }
);

const QuestionXResponseModel = model('QuestionXResponses', questionxresponseSchema)
export default QuestionXResponseModel