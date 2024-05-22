import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoute } from "./app/modules/productModule/product.route";
import { OrderRoute } from "./app/modules/orderModule/order.route";
const app: Application = express();

//middleware
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/products", ProductRoute);
app.use("/api/orders", OrderRoute);

export default app;
