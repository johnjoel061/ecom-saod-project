import express from "express";
import {
  createCategory,
  deleteACategory,
  getAllCategorys,
  getACategoryBySlug,
  updateACategory,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

//Create Category route
categoryRouter.post("/", createCategory);

//Get Category route
categoryRouter.get("/all", getAllCategorys);

//Get Category by slug Route
categoryRouter.get("/:slug", getACategoryBySlug);

//Update Category by ID Route
categoryRouter.put("/:id", updateACategory);

//Delete Category by ID Route
categoryRouter.delete("/:id", deleteACategory);

export default categoryRouter;
