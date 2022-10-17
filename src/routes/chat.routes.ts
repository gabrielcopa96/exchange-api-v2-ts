import { Router } from "express";
import { getAllsChatsByUser, getChatById } from "../controllers/chat.controller";

const router = Router();

/**
 * http://localhost:3002/chat/:id_user [GET]
 * http://localhost:3002/chat/:id [GET]
 */
    router
        .get('/:id', getChatById)
        .get('/:id_user', getAllsChatsByUser)

export { router }