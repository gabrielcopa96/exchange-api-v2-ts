import { Router } from "express";
import { createMessage, getMessage, getMessages } from "../controllers/message.controller";

const router = Router();

/**
 * http://localhost:3002/message [GET] - [POST]
 * http://localhost:3002/message/:id [GET]
 */
    router
        .get('/', getMessages)
        .get('/:id', getMessage)
        .post('/', createMessage)

export { router }