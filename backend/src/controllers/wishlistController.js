import { Wishlist } from "../models/wishlistModel.js";
import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";

// @dest Create a new Wishlist
// @router /api/wishlist/
// @access Private

export const createWishlist = expressAsyncHandler(async (req, res) => {
  try {
    const newWishlist = await Wishlist.create(req.body); 
    res.status(201).json({ status: true, data: newWishlist });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Get All Wishlists
// @router /api/Wishlist/
// @access Public
export const getAllWishlists = expressAsyncHandler(async (req, res) => {
  try {
    const wishlists = await Wishlist.find();
    res.status(201).json({ status: true, data: wishlists });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Get a Wishlist By Slug
// @router /api/wishlist/:slug
// @access Public
export const getAWishlistBySlug = expressAsyncHandler(async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ slug: req.params.slug });
    res.status(201).json({ status: true, data: wishlist });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Update a Wishlist 
// @router /api/wishlist/:id
// @access Public
export const updateAWishlist = expressAsyncHandler(async (req, res) => {
  try {
    const wishlist = await Wishlist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!wishlist) {
      throw new AppError("Wishlist Not Found !", 404);
    }
    res.status(201).json({ status: true, data: wishlist });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Delete a Wishlist 
// @router /api/wishlist/:id
// @access Public
export const deleteAWishlist = expressAsyncHandler(async (req, res) => {
  try {
    const wishlist = await Wishlist.findByIdAndDelete(req.params.id);
    if (!wishlist) {
      throw new AppError("Wishlist Not Found !", 404);
    }
    res.status(201).json({ status: true, message: "Wishlist Deleted Successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});