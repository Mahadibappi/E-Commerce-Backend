import { z } from "zod";
const orderValidation = z.object({
  email: z.string().email({ message: "Email is Required" }),
  productId: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export default orderValidation;
