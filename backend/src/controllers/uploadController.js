import https from "https";
import fs from "fs";
import expressAsyncHandler from "express-async-handler";

const BASE_HOSTNAME = "storage.bunnycdn.com";
const HOST_NAME = BASE_HOSTNAME;
const ACCESS_KEY = "1abd74a2-1b07-461a-929a2d090955-4242-41d3";
const STORAGE_ZONE_NAME = "ecom-saod";

export const uploadFile = expressAsyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file attached");
  }
  const file = req.file;
  const filePath = file.path;
  const fileName = encodeURIComponent(file.originalname);
});
