import { Category } from "../models/categoryModel.js";
import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";

// @dest Create a new Category
// @router /api/category/
// @access Private

export const createCategory = expressAsyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json({ status: true, data: newCategory });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Get All Categorys
// @router /api/Category/
// @access Public
export const getAllCategorys = expressAsyncHandler(async (req, res) => {
  try {
    const categorys = await Category.find();
    res.status(201).json({ status: true, data: categorys });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Get a Category By Slug
// @router /api/category/:slug
// @access Public
export const getACategoryBySlug = expressAsyncHandler(async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    res.status(201).json({ status: true, data: category });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Update a Category 
// @router /api/category/:id
// @access Public
export const updateACategory = expressAsyncHandler(async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) {
      throw new AppError("Category Not Found !", 404);
    }
    res.status(201).json({ status: true, data: category });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Delete a Category 
// @router /api/category/:id
// @access Public
export const deleteACategory = expressAsyncHandler(async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      throw new AppError("Category Not Found !", 404);
    }
    res.status(201).json({ status: true, message: "Category Deleted Successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});