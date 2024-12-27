import { SubCategory } from "../models/subCategoryModel.js";
import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";

// @dest Create a new SubCategory
// @router /api/subcategory /
// @access Private

export const createSubCategory = expressAsyncHandler(async (req, res) => {
  try {
    const newSubCategory = await SubCategory.create(req.body);
    res.status(201).json({ status: true, data: newSubCategory });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Get All SubCategorys
// @router /api/SubCategory/
// @access Public
export const getAllSubCategorys = expressAsyncHandler(async (req, res) => {
  try {
    const subcategorys = await SubCategory.find();
    res.status(201).json({ status: true, data: subcategorys });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Get a SubCategory By Slug
// @router /api/subcategory/:slug
// @access Public
export const getASubCategoryBySlug = expressAsyncHandler(async (req, res) => {
  try {
    const subcategory = await SubCategory.findOne({ slug: req.params.slug });
    res.status(201).json({ status: true, data: subcategory });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Update a SubCategory 
// @router /api/subcategory/:id
// @access Public
export const updateASubCategory = expressAsyncHandler(async (req, res) => {
  try {
    const subcategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!subcategory) {
      throw new AppError("SubCategory Not Found !", 404);
    }
    res.status(201).json({ status: true, data: subcategory });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Delete a SubCategory 
// @router /api/subcategory/:id
// @access Public
export const deleteASubCategory = expressAsyncHandler(async (req, res) => {
  try {
    const subcategory = await SubCategory.findByIdAndDelete(req.params.id);
    if (!subcategory) {
      throw new AppError("SubCategory Not Found !", 404);
    }
    res.status(201).json({ status: true, message: "SubCategory Deleted Successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});