import express from "express";

import { productController } from "./product.controller";
const router = express.Router();

router.post("/create-product", productController.createProducts);
router.get("/getProducts", productController.getAllProducts);

export const ProductRoute = router;
