import { ProductData } from "./product.interface";
import ProductModel from "./product.model";

// product create in database
const createProductInDB = async (product: ProductData) => {
  const result = await ProductModel.create(product);
  return result;
};

//get all products
const getAllProducts = async () => {
  const result = await ProductModel.find();
  return result;
};

export const ProductService = { createProductInDB, getAllProducts };
