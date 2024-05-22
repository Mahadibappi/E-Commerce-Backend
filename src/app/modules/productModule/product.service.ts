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

// get single product
const singleProduct = async (id: string) => {
  const result = await ProductModel.findById(id);
  if (!result) {
    throw new Error("Product not fond");
  }
  return result;
};
export const ProductService = {
  createProductInDB,
  getAllProducts,
  singleProduct,
};
