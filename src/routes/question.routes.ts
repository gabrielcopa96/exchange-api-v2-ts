import { Router } from "express";
import { createQuestion, getQuestion, getQuestions } from "../controllers/question.controller";

const router = Router();

/**
 * http://localhost:3002/question [GET] -> all responses
 * http://localhost:3002/question/:id [GET]
 * http://localhost:3002/question [POST]: -> Create new response for in question
 */
router
    .get('/', getQuestions)
    .get('/:id', getQuestion)
    .post('/', createQuestion)


export { router };