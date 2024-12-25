import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { createVendor, getVendors } from "../controllers/vendorController.js";

const vendorRouter = express.Router();

vendorRouter.post("/", createVendor);
vendorRouter.get("/all", getVendors);


export default vendorRouter;    