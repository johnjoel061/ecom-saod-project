import express from "express";
import { createVendor, deleteVendor, getVendorBySlug, getVendors, updateVendor } from "../controllers/vendorController.js";

const vendorRouter = express.Router();

//Create vendors route
vendorRouter.post("/", createVendor);

//Get vendors route
vendorRouter.get("/all", getVendors);

//Get Vendor by slug Route
vendorRouter.get("/:slug", getVendorBySlug);

//Update Vendor by ID Route
vendorRouter.put("/:id", updateVendor);

//Delete Vendor by ID Route
vendorRouter.delete("/:id", deleteVendor);

export default vendorRouter;    