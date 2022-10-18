import { Router } from "express";
import {
  createQuestion,
  getQuestion,
  getQuestions,
} from "../controllers/question.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

/**
 * http://localhost:3002/question [GET] -> all responses
 * http://localhost:3002/question/:id [GET]
 * http://localhost:3002/question [POST]: -> Create new response for in question
 */
router
  .get("/", checkJwt, getQuestions)
  .get("/:id", checkJwt, getQuestion)
  .post("/", checkJwt, createQuestion);

export { router };
