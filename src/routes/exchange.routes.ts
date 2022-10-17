import { Router } from "express";
import { createExhange, getExchanges } from "../controllers/exchange.controller";

const router = Router();

/**
 * http://localhost:3002/publication [GET] - [POST] - [DELETE]
 * http://localhost:3002/publication/:id [GET]
 */
    router
        .get('/', getExchanges)  
        .post('/', createExhange)  

export { router };
