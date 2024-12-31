import { Order } from "../models/orderModel.js";
import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";

// @dest Create a new Order
// @router /api/order/
// @access Private