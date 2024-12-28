import https from "https";
import fs from "fs";
import expressAsyncHandler from "express-async-handler";

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

  const options = {
    method: "PUT",
    hostname: HOSTNAME,
    path: `/${STORAGE_ZONE_NAME}/${fileName}`,
    headers: {
      AccessKey: ACCESS_KEY,
      "Content-Type": "application/octet-stream",
    },
  };

  const reqBunny = https.request(options, (response) => {
    let responseBody = "";

    response.on("data", (chunk) => {
      responseBody += chunk;
    });

    response.on("end", () => {
      if (response.statusCode === 201 || response.statusCode === 200) {
        // Delete the local file after successful upload
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Error in removing file:", err);
          } else {
            console.log("File Removed Successfully");
          }
        });

        return res.json({
          status: true,
          msg: "File Uploaded",
          path: `${STORAGE_ZONE_NAME}/${fileName}`,
        });
      } else {
        return res.status(response.statusCode).json({
          status: false,
          msg: "File Upload Failed",
          response: responseBody,
        });
      }
    });
  });

  reqBunny.on("error", (error) => {
    console.error("Request Error:", error);

    // Delete the local file in case of upload failure
    fs.unlink(filePath, (err) => {
      if (err) console.error("Error in removing file:", err);
    });

    return res.status(500).json({
      status: false,
      msg: "File Upload Failed",
      error: error.message,
    });
  });

  readStream.on("error", (err) => {
    console.error("ReadStream Error:", err);
    return res.status(500).json({
      status: false,
      msg: "File Upload Failed",
      error: err.message,
    });
  });

  readStream.pipe(reqBunny);
});
