import { Router } from "express";
import {
  createResponse,
  getResponse,
  getResponses,
} from "../controllers/response.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

/**
 * http://localhost:3002/response [GET] -> all responses
 * http://localhost:3002/response/:id [GET]
 * http://localhost:3002/response [POST]: -> Create new response for in question
 */
router
  .get("/", checkJwt, getResponses)
  .get("/:id", checkJwt, getResponse)
  .post("/", checkJwt, createResponse);

export { router };
