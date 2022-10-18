import { Router } from "express";
import {
  createMessage,
  getMessage,
  getMessages,
} from "../controllers/message.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

/**
 * http://localhost:3002/message [GET] - [POST]
 * http://localhost:3002/message/:id [GET]
 */
router
  .get("/", checkJwt, getMessages)
  .get("/:id", checkJwt, getMessage)
  .post("/", checkJwt, createMessage);

export { router };
