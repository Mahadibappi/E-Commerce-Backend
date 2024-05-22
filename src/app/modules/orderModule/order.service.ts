import { Order } from "./order.interface";
import { orderModel } from "./order.model";

const createOrder = async (orderData: Order) => {
  const newOrder = await orderModel.create(orderData);
  return newOrder;
};

export const OrderService = { createOrder };
