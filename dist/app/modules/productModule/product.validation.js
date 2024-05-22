"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = exports.InventoryValidation = exports.VariantValidation = void 0;
const zod_1 = require("zod");
exports.VariantValidation = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
exports.InventoryValidation = zod_1.z.object({
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean(),
});
exports.ProductValidation = zod_1.z.object({
    name: zod_1.z.string({ message: "Name is Required" }),
    description: zod_1.z.string({ message: "Description is Required" }),
    price: zod_1.z.number({ message: "Price is Required" }),
    category: zod_1.z.string({ message: "Category is Required" }),
    tags: zod_1.z.array(zod_1.z.string({ message: "Tags is Required" })),
    variants: zod_1.z.array(exports.VariantValidation, { message: "Variants is Required" }),
    inventory: exports.InventoryValidation,
});
exports.default = exports.ProductValidation;
