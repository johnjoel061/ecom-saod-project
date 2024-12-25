import express from "express";
import { deleteUserProfile, getAllProfile, loginUser, profile, registerUser, updateProfile } from "../controllers/userController.js";
import { authorize, protect } from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/profile", protect, profile);
userRouter.put("/profile", protect, updateProfile);
userRouter.get("/users", protect, authorize("admin"), getAllProfile);
userRouter.delete("/users/:id", protect, deleteUserProfile);

export default userRouter;