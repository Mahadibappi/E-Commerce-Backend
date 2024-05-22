import { Order } from "./order.interface";
import { orderModel } from "./order.model";

const createOrder = async (orderData: Order) => {
  const newOrder = await orderModel.create(orderData);
  return newOrder;
};

const gerAllOrder = async () => {
  const getOrder = orderModel.find();
  return getOrder;
};
export const OrderService = { createOrder, gerAllOrder };
