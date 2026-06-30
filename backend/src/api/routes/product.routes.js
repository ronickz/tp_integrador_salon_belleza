import { Router } from "express";
import { validateId, validateProduct } from "../middlewares/index.js";


import { getAllProducts, getProductById, createProduct, modifyProduct, removeProduct, getActiveProducts } from "../controllers/product.controllers.js";


const router = Router();

router.get("/products", getActiveProducts);

// Endpoints relacionados a la administracion.

router.get("/admin/products", getAllProducts);
router.get("/admin/products/:id", validateId, getProductById);
router.post("/admin/products", validateProduct, createProduct);
router.put("/admin/products/:id", validateId, validateProduct, modifyProduct);
router.delete("/admin/products/:id", validateId, removeProduct);



export default router;