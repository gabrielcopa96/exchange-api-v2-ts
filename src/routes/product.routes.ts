import { Router } from "express";
import { createProduct, getProduct, getProducts } from "../controllers/product.controller";

const router = Router();


/**
 * http://localhost:3002/category [GET] - [POST]
 * http://localhost:3002/category/:id [GET]
 */
    router
        .get('/', getProducts)
        .get('/:id', getProduct)
        .post('/', createProduct)


export { router }