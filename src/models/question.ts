import { Schema, Types, model, Model } from "mongoose";
import { Question } from "../interfaces/question.interface";

const questionSchema = new Schema<Question>(
  {
    message: {
      type: String,
    },
    id_user: {
      type: Types.ObjectId,
      ref: "Users",
    },
  },
  {
    versionKey: false,
  }
);

const QuestionModel = model("Question", questionSchema);
export default QuestionModel;
