import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

/**
 * http://localhost:3002/category [GET] - [POST]
 * http://localhost:3002/category/:id [GET]
 */
router
  .get("/", checkJwt, getUsers)
  .get("/:id", checkJwt, getUser)

export { router };