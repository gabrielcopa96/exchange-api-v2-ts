import { Router } from "express";
import {
  createPublication,
  deleteLogicPublication,
  getPublication,
  searchPublicationsBy,
} from "../controllers/publication.controller";

const router = Router();

/**
 * http://localhost:3002/publication [GET] - [POST] - [DELETE]
 * http://localhost:3002/publication/:id [GET]
 */
router
  .post("/", createPublication)
  .get("/", searchPublicationsBy)
  .get("/:id", getPublication)
  .get("/:category", searchPublicationsBy)
  .delete("/", deleteLogicPublication);

export { router };
