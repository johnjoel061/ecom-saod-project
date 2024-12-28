import express from "express";
import {
  createWishlist,
  deleteAWishlist,
  getAllWishlists,
  getAWishlistById,
  updateAWishlist,
} from "../controllers/wishlistController.js";

const wishlistRouter = express.Router();

//Create Wishlist route
wishlistRouter.post("/", createWishlist);

//Get Wishlist route
wishlistRouter.get("/all", getAllWishlists);

//Get Wishlist by slug Route
wishlistRouter.get("/:id", getAWishlistById);

//Update Wishlist by ID Route
wishlistRouter.put("/:id", updateAWishlist);

//Delete Wishlist by ID Route
wishlistRouter.delete("/:id", deleteAWishlist);

export default wishlistRouter;
