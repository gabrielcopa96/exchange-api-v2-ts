import { ModelMessage } from "../interfaces/message.interface"
import ChatModel from "../models/chat"
import MessageModel from "../models/message"
import UserModel from "../models/user"

const getOneMessage = async ( id: string ) => {

    const message = await MessageModel.findById( id )

    if(!message) {
        return "ERROR_NOT_DATA_MESSAGE"
    }

    return message
}

const getAllMessages = async () => {

    const messages = await MessageModel.find({})

    if(!messages) {
        return "ERROR_NOT_DATA_COLECCIONT_MESSAGES"
    }

    return messages
}

const newMessage = async ( body: ModelMessage ) => {

    const { id_user, id_chat, id_userReceptor } = body

    let chat

    const newMessage = await MessageModel.create({
        message: body.message,
        id_user
    })

    if(!id_chat) {

        chat = await ChatModel.create({
            id_message: newMessage._id
        })

        await UserModel.findByIdAndUpdate(id_user, {
            chat: chat._id
        }, { new: true })

        await UserModel.findByIdAndUpdate(id_userReceptor, {
            chat: chat._id
        }, { new: true })

        return newMessage
 
    }

    chat = await ChatModel.findByIdAndUpdate(id_chat, {
        $push: { id_message: newMessage._id }
    }, { new: true })

    return {
        data: chat,
        newMessage
    }

}

export { getOneMessage, getAllMessages, newMessage }