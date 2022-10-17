import { Schema, Types, model, Model } from "mongoose";
import { Message } from "../interfaces/message.interface";

const messageSchema = new Schema<Message>(
  {
    id_user: {
      type: Types.ObjectId,
      ref: "Users",
    },
    message: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

const MessageModel = model("Message", messageSchema);
export default MessageModel;
