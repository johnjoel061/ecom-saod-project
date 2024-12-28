import https from "https";
import fs from "fs";
import expressAsyncHandler from "express-async-handler";
import { hostname } from "os";
import { error } from "console";

const BASE_HOSTNAME = "storage.bunnycdn.com";
const HOSTNAME = BASE_HOSTNAME;
const ACCESS_KEY = "1abd74a2-1b07-461a-929a2d090955-4242-41d3";
const STORAGE_ZONE_NAME = "ecom-saod";

export const uploadFile = expressAsyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file attached");
  }
  const file = req.file;
  const filePath = file.path;
  const fileName = encodeURIComponent(file.originalname);

  const readStream = fs.createReadStream(filePath);

  const option = {
    method: "PUT",
    hostname: HOSTNAME,
    path: `${STORAGE_ZONE_NAME}/${fileName}`,
    headers: {
      AccessKey: ACCESS_KEY,
      "Content-Type": "application/octet-stream",
    },
  };

  const reqBunny = https.request(option, (response) => {
    response.on("data", (chunk) => {
      console.log(chunk.toString("utf-8"));
    });

    reqBunny.on("error", (error) => {
      console.error(error);
    });

    readStream.pipe(reqBunny);
    const path = `${reqBunny.path}`;
    setTimeout(() => {
      fs.rm(filePath, () => {
        console.log("File removed");
      });
    });
    res.json({
      status: true,
      msg: "File Uploaded",
      path: path,
    });
  });
});
