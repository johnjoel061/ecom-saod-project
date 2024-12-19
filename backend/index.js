import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./src/utils/utils.js";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { errorHandler, notFoundErrorHandler } from "./src/middlewares/errorHandler.js";


//Load Environment Variables from .env file
dotenv.config();

//connection to MongoDB
dbConnect();

// Initialize Express app
const app = express();

//Middleware Setup
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// API Routes

// Error Handler Middlewares
app.use(errorHandler);
app.use(notFoundErrorHandler);

//Starting the Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
});