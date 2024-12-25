import express from "express";
import { protect } from "../middlewares/authMiddleware.js";

const vendorRouter = express.Router();

vendorRouter.post("/", protect);

export default vendorRouter;