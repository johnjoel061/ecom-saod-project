import { Support } from "../models/supportSchema.js";
import expressAsyncHandler from "express-async-handler";
import { AppError } from "../middlewares/errorHandler.js";

// @dest Create a new Support
// @router /api/support/
// @access Private

export const createSupport = expressAsyncHandler(async (req, res) => {
  try {
    const support = new Support(req.body);
    await support.save();
    res.status(201).json({ status: true, data: support });
  } catch (error) {
    throw new AppError(error);
  }
});

// @dest Get all Support
// @router /api/support/
// @access Private

export const getAllSupports = expressAsyncHandler(async (req, res) => {
  try {
    const supports = new Support.find().populate(
      "user product assignedTo assignedBy"
    );
    res.status(200).json({ status: true, data: supports });
  } catch (error) {
    throw new AppError(error);
  }
});

// @dest Get all Support
// @router /api/support/
// @access Private

export const getASupportById = expressAsyncHandler(async (req, res) => {
  try {
    const support = new Support.find(req.params.id).populate(
      "user product assignedTo assignedBy"
    );
    if (!support) {
      return res
        .status(404)
        .json({ status: false, message: "Support Query Not Found!" });
    }
    res.status(200).json({ status: true, data: support });
  } catch (error) {
    throw new AppError(error);
  }
});

// @dest Update a Support by ID
// @router /api/support/
// @access Private
export const updateASupportById = expressAsyncHandler(async (req, res) => {
  try {
    const support = new Support.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!support) {
      return res
        .status(404)
        .json({ status: false, message: "Support Query Not Found!" });
    }
    res.status(200).json({ status: true, data: support });
  } catch (error) {
    throw new AppError(error);
  }
});

// @dest Delete a Support by ID
// @router /api/support/
// @access Private
export const deleteASupportById = expressAsyncHandler(async (req, res) => {
  try {
    const support = new Support.findByIdAndDelete(req.params.id);
    if (!support) {
      return res
        .status(404)
        .json({ status: false, message: "Support Query Not Found!" });
    }
    res
      .status(200)
      .json({ status: true, message: "Support Deleted Successfully" });
  } catch (error) {
    throw new AppError(error);
  }
});

// @dest Assign A Support
// @router /api/support/
// @access Private
export const assignASupport = expressAsyncHandler(async (req, res) => {
  try {
    const { assignedTo, assignedBy } = req.body;
    const support = new Support.findByIdAndUpdate(
      req.params.id,
      { assignedTo, assignedBy },
      { new: true }
    ).populate("user product assignedTo assignedBy");
    if (!support) {
      return res
        .status(404)
        .json({ status: false, message: "Support Query Not Found!" });
    }
    res.status(200).json({ status: true, data: support });
  } catch (error) {
    throw new AppError(error);
  }
});

// @dest Assign A Support
// @router /api/support/
// @access Private
export const updateASupportStatus = expressAsyncHandler(async (req, res) => {
    try {
      const { status } = req.body;
      const support = new Support.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      ).populate("user product assignedTo assignedBy");
      if (!support) {
        return res
          .status(404)
          .json({ status: false, message: "Support Query Not Found!" });
      }
      res.status(200).json({ status: true, data: support });
    } catch (error) {
      throw new AppError(error);
    }
  });
