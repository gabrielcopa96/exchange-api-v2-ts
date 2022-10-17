import { Schema, Types, model, Model } from "mongoose";
import { Response } from "../interfaces/response.interface";

const responseSchema = new Schema<Response>(
    {
        message: {
            type: String
        },
        id_user: {
            type: Types.ObjectId, ref: 'Users'
        }
    },
    {
        versionKey: false
    }
)

const ResponseModel = model('Responses', responseSchema)
export default ResponseModel