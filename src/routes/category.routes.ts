import { Router } from "express";
import { getCategories, createCategory, getCategory } from "../controllers/category.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();


/**
 * http://localhost:3002/category [GET] - [POST]
 * http://localhost:3002/category/:id [GET]
 */
router
    .get('/', checkJwt, getCategories)
    .get('/:id', getCategory)
    .post('/', createCategory)

export { router };