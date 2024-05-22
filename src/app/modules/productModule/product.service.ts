import { ProductData } from "./product.interface";
import ProductModel from "./product.model";

// product create in database
const createProductInDB = async (product: ProductData) => {
  const result = await ProductModel.create(product);
  return result;
};

//get all products
const getAllProducts = async (searchTerm?: string) => {
  let query = {};
  if (searchTerm) {
    const regex = new RegExp(searchTerm, "i");
    query = {
      $or: [
        { name: { $regex: regex } },
        { category: { $regex: regex } },
        { tags: { $regex: regex } },
      ],
    };
  }
  const result = await ProductModel.find(query);
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

// update product by id

const updateProduct = async (id: string, updateData: Partial<ProductData>) => {
  const updateOne = await ProductModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  return updateOne;
};

export const ProductService = {
  createProductInDB,
  getAllProducts,
  singleProduct,
  updateProduct,
};
