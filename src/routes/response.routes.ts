import { Router } from "express";
import { createResponse, getResponse, getResponses } from "../controllers/response.controller";

const router = Router();

/**
 * http://localhost:3002/response [GET] -> all responses
 * http://localhost:3002/response/:id [GET]
 * http://localhost:3002/response [POST]: -> Create new response for in question
 */
router
    .get('/', getResponses)
    .get('/:id', getResponse)
    .post('/', createResponse)


export { router };