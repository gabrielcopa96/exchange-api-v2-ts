import QuestionXResponseModel from "../models/questionXresponse";

const getAllQuestionxResponses = async () => {
  const questionxresponse = await QuestionXResponseModel.find({});

  if (!questionxresponse) {
    return "ERROR_DATA_QUESTION_X_RESPONSES";
  }

  return questionxresponse;
};

export { getAllQuestionxResponses }