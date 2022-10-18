import { Router } from "express";
import {
  getAllsChatsByUser,
  getChatById,
} from "../controllers/chat.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

/**
 * http://localhost:3002/chat/:id_user [GET]
 * http://localhost:3002/chat/:id [GET]
 */
router
  .get("/:id", checkJwt, getChatById)
  .get("/:id_user", checkJwt, getAllsChatsByUser);

export { router };
