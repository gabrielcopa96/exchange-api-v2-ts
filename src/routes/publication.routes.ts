import { Router } from "express";
import {
  createPublication,
  deleteLogicPublication,
  getPublication,
  searchPublicationsBy,
} from "../controllers/publication.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

/**
 * http://localhost:3002/publication [GET] - [POST] - [DELETE]
 * http://localhost:3002/publication/:id [GET]
 */
router
  .post("/", checkJwt, createPublication)
  .get("/", checkJwt, searchPublicationsBy)
  .get("/:id", checkJwt, getPublication)
  .get("/:category", checkJwt, searchPublicationsBy)
  .delete("/", checkJwt, deleteLogicPublication);

export { router };
