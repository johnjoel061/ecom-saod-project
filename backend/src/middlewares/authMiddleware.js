import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import { AppError } from "./errorHandler.js";

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Correct token extraction
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch user without password
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      // Log error for debugging
      console.error("Token verification failed:", error.message);

      res.status(401).json({status: false, message: "No Token Attached to the Header"})
    }
  } else {
    res.status(401).json({status: false, message: "Not Authorized"})
  }
};


export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(403).json({status: false, message: "You don't have permission"})

    }
    next();
  };
};
