import { Router } from "express";

import { createSale } from "../controllers/sales.controllers.js";

import { validateSale } from "../middlewares/index.js";

const router = Router();

router.post("/sales", validateSale, createSale);

export default router;
