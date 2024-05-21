import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProducts = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await ProductService.createProductInDB(data);
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

export const productController = { createProducts };
