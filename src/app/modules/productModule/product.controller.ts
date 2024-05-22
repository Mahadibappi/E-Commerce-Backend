import { Request, Response } from "express";
import { ProductService } from "./product.service";
import ProductValidation from "./product.validation";

// create product
const createProducts = async (req: Request, res: Response) => {
  try {
    const products = req.body;
    const validData = ProductValidation.parse(products);
    const result = await ProductService.createProductInDB(validData);
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

// get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await ProductService.getAllProducts();
    res.status(200).json({
      success: true,
      message: "All Product got successfully",
      data: allProducts,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

// get single product
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const singleProduct = await ProductService.singleProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product got successfully",
      data: singleProduct,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

export const productController = {
  createProducts,
  getAllProducts,
  getSingleProduct,
};
