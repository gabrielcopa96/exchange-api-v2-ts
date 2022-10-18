import { Router } from "express";
import {
  createExhange,
  getExchanges,
} from "../controllers/exchange.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

/**
 * http://localhost:3002/publication [GET] - [POST] - [DELETE]
 * http://localhost:3002/publication/:id [GET]
 */
router.get("/", checkJwt, getExchanges).post("/", checkJwt, createExhange);

export { router };
