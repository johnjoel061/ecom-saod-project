import express from "express";
import {
    approveAReview,
  createReview,
  deleteAReview,
  getAllReviews,
  getAReviewById,
  updateAReview,
} from "../controllers/reviewController.js";

const reviewRouter = express.Router();

//Create Review route
reviewRouter.post("/", createReview);

//Get Review route
reviewRouter.get("/all", getAllReviews);

//Get Review by slug Route
reviewRouter.get("/:slug", getAReviewById);

//Update Review by ID Route
reviewRouter.put("/:id", updateAReview);

//Update Approved Review by ID Route
reviewRouter.put("/approve-request", approveAReview);

//Delete Review by ID Route
reviewRouter.delete("/:id", deleteAReview);

export default reviewRouter;
