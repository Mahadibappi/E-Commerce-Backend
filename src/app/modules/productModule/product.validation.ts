import { z } from "zod";
export const VariantValidation = z.object({
  type: z.string(),
  value: z.string(),
});

export const InventoryValidation = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

export const ProductValidation = z.object({
  name: z.string({ message: "Name is Required" }),
  description: z.string({ message: "Description is Required" }),
  price: z.number({ message: "Price is Required" }),
  category: z.string({ message: "Category is Required" }),
  tags: z.array(z.string({ message: "Tags is Required" })),
  variants: z.array(VariantValidation, { message: "Variants is Required" }),
  inventory: InventoryValidation,
});
export default ProductValidation;
