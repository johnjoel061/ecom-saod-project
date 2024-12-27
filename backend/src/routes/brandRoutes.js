import express from "express";
import {
  createBrand,
  deleteABrand,
  getAllBrands,
  getABrandBySlug,
  updateABrand,
} from "../controllers/brandController.js";

const brandRouter = express.Router();

//Create Brand route
brandRouter.post("/", createBrand);

//Get Brand route
brandRouter.get("/all", getAllBrands);

//Get Brand by slug Route
brandRouter.get("/:slug", getABrandBySlug);

//Update Brand by ID Route
brandRouter.put("/:id", updateABrand);

//Delete Brand by ID Route
brandRouter.delete("/:id", deleteABrand);

export default brandRouter;
