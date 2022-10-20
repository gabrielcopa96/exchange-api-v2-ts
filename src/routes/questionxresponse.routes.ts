import { Router } from "express";
import { getQuestionXResponses } from "../controllers/questionxresponse.controller"
import { checkJwt } from "../middlewares/session";

const router = Router();

/**
 * http://localhost:3002/questionxresponse [GET] -> all questionxresponses
 */
router
  .get("/", checkJwt, getQuestionXResponses)

export { router };
