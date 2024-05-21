import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoute } from "./app/modules/productModule/product.route";
const app: Application = express();

//middleware
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/product", ProductRoute);

export default app;
