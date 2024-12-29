import express from "express";
import multer from "multer";
import { deleteFile, uploadFile } from "../controllers/uploadController.js";

const uploadRouter = express.Router();

const upload = multer({ dest: "uploads/" });

uploadRouter.post("/upload-file", upload.single("file"), uploadFile);
uploadRouter.delete("/delete-file/:fileName",  deleteFile);

export default uploadRouter;
