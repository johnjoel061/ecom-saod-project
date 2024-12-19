import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export const dbConnect = mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database Connected"))
  .catch((error) => {
    console.error("MongoDB Connection Error: ", error);
  });
