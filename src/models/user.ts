import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true 
        },
        image_profile: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minlength: 8,
            maxlength: 64
        },
        chat: {
            type: [Types.ObjectId], ref: 'Chats'
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
        },
        publications: {
            type: [Types.ObjectId], ref: 'Publications'
        },
        exchange: {
            type: [Types.ObjectId], ref: 'Exchanges'
        },
        typeUser: {
            type: String,
            required: true,
            enum: ['admin', 'usercommon']
        }
    },
    {
        versionKey: false
    }
)

const UserModel = model('Users', userSchema)
export default UserModel