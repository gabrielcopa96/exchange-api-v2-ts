import { Router } from "express";
import {
  createProduct,
  getProduct,
  getProducts,
} from "../controllers/product.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

/**
 * http://localhost:3002/category [GET] - [POST]
 * http://localhost:3002/category/:id [GET]
 */
router
  .get("/", checkJwt, getProducts)
  .get("/:id", checkJwt, getProduct)
  .post("/", checkJwt, createProduct);

export { router };
