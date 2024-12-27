import { Brand } from "../models/brandModel.js";
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

// @dest Get All Products
// @router /api/product/
// @access Public
export const getAllProducts = expressAsyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json({ status: true, data: products });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Get a Product By Slug
// @router /api/product/:slug
// @access Public
export const getAProductBySlug = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    res.status(201).json({ status: true, data: product });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Update a Product 
// @router /api/product/:id
// @access Public
export const updateAProduct = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      throw new AppError("Product Not Found !", 404);
    }
    res.status(201).json({ status: true, data: product });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Delete a Product 
// @router /api/product/:id
// @access Public
export const deleteAProduct = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      throw new AppError("Product Not Found !", 404);
    }
    res.status(201).json({ status: true, message: "Product Deleted Successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});