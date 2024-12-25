import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { createVendor } from "../controllers/vendorController.js";

const vendorRouter = express.Router();

vendorRouter.post("/", createVendor);

export default vendorRouter;