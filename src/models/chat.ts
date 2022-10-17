import { Schema, Types, model, Model } from "mongoose";
import { Chat } from "../interfaces/chat.interface";

const ChatSchema = new Schema<Chat>(
  {
    id_message: {
      type: [Types.ObjectId],
      ref: "Messages",
    },
  },
  {
    versionKey: false,
  }
);

const ChatModel = model("Chat", ChatSchema);
export default ChatModel;
