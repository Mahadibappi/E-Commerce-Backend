import express from "express";
import { OrderController } from "./order.controller";
const router = express.Router();

router.post("/", OrderController.CreateOrder);
router.get("/", OrderController.GetAllOrders);

export const OrderRoute = router;
