import express from "express";
import {
  createSubCategory,
  deleteASubCategory,
  getAllSubCategorys,
  getASubCategoryBySlug,
  updateASubCategory,
} from "../controllers/subCategoryController.js";

const subCategoryRouter = express.Router();

//Create SubCategory route
subCategoryRouter.post("/", createSubCategory);

//Get SubCategory route
subCategoryRouter.get("/all", getAllSubCategorys);

//Get SubCategory by slug Route
subCategoryRouter.get("/:slug", getASubCategoryBySlug);

//Update SubCategory by ID Route
subCategoryRouter.put("/:id", updateASubCategory);

//Delete SubCategory by ID Route
subCategoryRouter.delete("/:id", deleteASubCategory);

export default subCategoryRouter;
