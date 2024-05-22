import express from "express";

import { productController } from "./product.controller";
const router = express.Router();

router.post("/", productController.createProducts);
router.get("/", productController.getAllProducts);
router.get("/:productId", productController.getSingleProduct);

export const ProductRoute = router;
