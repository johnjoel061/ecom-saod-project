import express from "express";
import {
  createProduct,
  deleteAProduct,
  getAllProducts,
  getAProductBySlug,
  updateAProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

//Create Product route
productRouter.post("/", createProduct);

//Get Product route
productRouter.get("/all", getAllProducts);

//Get Product by slug Route
productRouter.get("/:slug", getAProductBySlug);

//Update Product by ID Route
productRouter.put("/:id", updateAProduct);

//Delete Product by ID Route
productRouter.delete("/:id", deleteAProduct);

export default productRouter;
