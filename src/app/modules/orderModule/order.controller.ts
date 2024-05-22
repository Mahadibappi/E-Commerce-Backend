import { Request, Response } from "express";
import { OrderService } from "./order.service";
import orderValidation from "./order.validation";

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const newOrder = await OrderService.createOrder(order);
    const validOrder = orderValidation.parse(newOrder);

    res.status(200).json({
      success: true,
      message: "order created successfully",
      data: validOrder,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

export const OrderController = { CreateOrder };
