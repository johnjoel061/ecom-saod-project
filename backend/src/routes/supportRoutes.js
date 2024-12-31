import express from "express";
import {
  assignASupport,
  createSupport,
  deleteASupportById,
  getAllSupports,
  getASupportById,
  updateASupportById,
  updateASupportStatus,
} from "../controllers/supportController.js";

const supportRouter = express.Router();

supportRouter.post("/", createSupport);
supportRouter.get("/", getAllSupports);
supportRouter.get("/:id", getASupportById);
supportRouter.put("/:id", updateASupportById);
supportRouter.delete("/:id", deleteASupportById);
supportRouter.put("/:id/assign", assignASupport);
supportRouter.put("/:id/status", updateASupportStatus);

export default supportRouter;
