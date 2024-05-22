import { Order } from "./order.interface";
import { orderModel } from "./order.model";

const createOrder = async (orderData: Order) => {
  const newOrder = await orderModel.create(orderData);
  return newOrder;
};

const getAllOrder = async (email: string) => {
  const filter = email ? { email } : {};
  const getOrder = orderModel.find(filter);
  return getOrder;
};
export const OrderService = { createOrder, getAllOrder };
