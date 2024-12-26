import { Product } from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";

// @dest Create a new Product
// @router /api/product/
// @access Private

export const createProduct = expressAsyncHandler(async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ status: true, data: newProduct });
  } catch (error) {
    throw new AppError(error, 400);
  }
});
