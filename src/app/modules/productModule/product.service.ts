import { ProductData } from "./product.interface";
import ProductModel from "./product.model";

const createProductInDB = async (product: ProductData) => {
  const result = await ProductModel.create(product);
  return result;
};

export const ProductService = { createProductInDB };
