import { Vendor } from "../models/vendorModel.js";
import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";

// @dest Create a new Vendor
// @router /api/vendor/  
// @access Private

export const createVendor = expressAsyncHandler(async (req, res) => {
   try {
    const newVendor = await Vendor.create(req.body);
    res.status(201).json({ status: true, data: newVendor });
   } catch (error) {
    throw new AppError("Something Went Wrong!", 400);
   } 
});