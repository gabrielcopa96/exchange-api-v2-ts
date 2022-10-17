import ChatModel from "../models/chat"

const getOneChat = async (id: string) => {

    const chat = await ChatModel.findById( id )

    if(!chat) {
        return "ERROR_NOT_FOUND_EXITS_MESSAGE"
    }

    return chat

}

const getChatsByUsers = async (id_user: string) => {

    const chatAll = await ChatModel.find({ id_user: id_user });
    
    if(!chatAll) {
        return "ERROR_NOT_FOUND_EXTIS_MESSAGES"
    }

    return chatAll
}

export { getOneChat, getChatsByUsers }