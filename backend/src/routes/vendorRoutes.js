import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { createVendor, getVendorBySlug, getVendors, updateVendor } from "../controllers/vendorController.js";

const vendorRouter = express.Router();

//Create vendors route
vendorRouter.post("/", createVendor);

//Get vendors route
vendorRouter.get("/all", getVendors);

//Get Vendor by slug Route
vendorRouter.get("/:slug", getVendorBySlug);

//Get Vendor by slug Route
vendorRouter.put("", updateVendor);

export default vendorRouter;    