import { Order } from "../models/orderModel.js";
import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";

// @dest Create a new Order
// @router /api/order/
// @access Private

export const createOrder = expressAsyncHandler(async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ status: true, data: order });
  } catch (error) {
    throw new AppError(error);
  }
});

// @dest get all Order
// @router /api/order/
// @access Private
export const getAllOrders = expressAsyncHandler(async (req, res) => {
    try {
      const order = await Order.find().populate("user items.product");
      await order.save();
      res.status(201).json({ status: true, data: order });
    } catch (error) {
      throw new AppError(error);
    }
  });

// @dest get a Single Order
// @router /api/order/
// @access Private