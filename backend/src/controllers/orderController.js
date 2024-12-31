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
    const orders = await Order.find().populate("user items.product");
    res.status(200).json({ status: true, data: orders });
  } catch (error) {
    throw new AppError(error);
  }
});

// @dest get a Single Order
// @router /api/order/
// @access Private
export const getAOrderById = expressAsyncHandler(async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user items.product"
    );
    res.status(200).json({ status: true, data: order });
  } catch (error) {
    throw new AppError(error);
  }
});

// @dest update a Single Order
// @router /api/order/
// @access Private
export const updateAOrder = expressAsyncHandler(async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) {
      return res
        .status(400)
        .json({ status: false, message: "Order Not Found!" });
    }
    res.status(200).json({ status: true, data: order });
  } catch (error) {
    throw new AppError(error);
  }
});

// @dest delete a Order
// @router /api/order/
// @access Private
export const deleteAOrder = expressAsyncHandler(async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res
        .status(400)
        .json({ status: false, message: "Order Not Found!" });
    }
    res.status(200).json({ status: true, message: "Order Deleted!" });
  } catch (error) {
    throw new AppError(error);
  }
});


// @dest update a Order Status
// @router /api/order/
// @access Private
export const updateOrderStatus = expressAsyncHandler(async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!order) {
      return res
        .status(400)
        .json({ status: false, message: "Order Not Found!" });
    }
    res.status(201).json({ status: true, message: "Order Deleted!" });
  } catch (error) {
    throw new AppError(error);
  }
});


// @dest Handle Order Cancellation
// @router /api/order/
// @access Private
export const handleOrderCancellation = expressAsyncHandler(async (req, res) => {
    try {
      const { reason } = req.body;
      const order = await Order.findByIdAndUpdate(
        req.params.id,
        { status: "cancelled", cancellation: {reason, createdAt: new Date()}},
        { new: true }
      );
      if (!order) {
        return res
          .status(400)
          .json({ status: false, message: "Order Not Found!" });
      }
      res.status(201).json({ status: true, message: "Order Deleted!" });
    } catch (error) {
      throw new AppError(error);
    }
  });
  
