import { Review } from "../models/reviewModel.js";
import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";

// @dest Create a new Review
// @router /api/review/
// @access Private

export const createReview = expressAsyncHandler(async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json({ status: true, data: newReview });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Get All Reviews
// @router /api/Review/
// @access Public
export const getAllReviews = expressAsyncHandler(async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(201).json({ status: true, data: reviews });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Get a Review By Slug
// @router /api/review/:slug
// @access Public
export const getAReviewById = expressAsyncHandler(async (req, res) => {
  try {
    const review = await Review.findOne({ id: req.params.id });
    res.status(201).json({ status: true, data: review });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Update a Review
// @router /api/review/:id
// @access Public
export const updateAReview = expressAsyncHandler(async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!review) {
      throw new AppError("Review Not Found !", 404);
    }
    res.status(201).json({ status: true, data: review });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Delete a Review
// @router /api/review/:id
// @access Public
export const deleteAReview = expressAsyncHandler(async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      throw new AppError("Review Not Found !", 404);
    }
    res
      .status(201)
      .json({ status: true, message: "Review Deleted Successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});

// @dest Update is Approved
// @router /api/review/approved-request
// @access Public
export const approveAReview = expressAsyncHandler(async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { isApproved: req.body.isApproved },
      { new: true }
    );
    if (!review) {
      throw new AppError("Review Not Found !", 404);
    }
    res
      .status(201)
      .json({ status: true, message: "Review Updated Successfully" });
  } catch (error) {
    throw new AppError(error, 400);
  }
});
