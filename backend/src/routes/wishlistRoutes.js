import express from "express";
import {
  createWishlist,
  deleteAWishlist,
  getAllWishlists,
  getAWishlistBySlug,
  updateAWishlist,
} from "../controllers/wishlistController.js";

const wishlistRouter = express.Router();

//Create Wishlist route
wishlistRouter.post("/", createWishlist);

//Get Wishlist route
wishlistRouter.get("/all", getAllWishlists);

//Get Wishlist by slug Route
wishlistRouter.get("/:slug", getAWishlistBySlug);

//Update Wishlist by ID Route
wishlistRouter.put("/:id", updateAWishlist);

//Delete Wishlist by ID Route
wishlistRouter.delete("/:id", deleteAWishlist);

export default wishlistRouter;
