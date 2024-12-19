import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { dbConnect } from "./src/utils/utils.js";

dotenv.config();
dbConnect();
const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
});