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
    throw new AppError(error, 400);
  }
});

// @dest Get Vendor
// @router /api/vendor/all
// @access Public
export const getVendors = expressAsyncHandler(async (req, res) => {
  try {
    const vendors = await Vendor.find().populate("user");
    res.status(201).json({ status: true, data: vendors });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Get Vendor By Slug
// @router /api/vendor/:slug
// @access Public
export const getVendorBySlug = expressAsyncHandler(async (req, res) => {
  try {
    const vendors = await Vendor.findOne({ slug: req.params.slug }).populate(
      "user",
      "-password"
    );
    res.status(201).json({ status: true, data: vendors });
  } catch (error) {
    throw new AppError(error, 400);
  }
});


// @dest Update Vendor 
// @router /api/vendor/:id
// @access Public
export const updateVendor = expressAsyncHandler(async (req, res) => {
   try {
     const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
     });

     if(!vendor){
      throw new AppError("Vendor Not Found !", 404);
      
     }
     res.status(201).json({ status: true, data: vendor });
   } catch (error) {
     throw new AppError(error, 400);
   }
 });


// @dest Delete Vendor 
// @router /api/vendor/
// @access Public
export const deleteVendor = expressAsyncHandler(async (req, res) => {
   try {
     const vendor = await Vendor.findByIdAndDelete(req.params.id);

     if(!vendor){
      throw new AppError("Vendor Not Found !", 404);
      
     }
     res.status(201).json({ status: true, data: vendor });
   } catch (error) {
     throw new AppError(error, 400);
   }
 });
 