import express from "express";
import { deleteUserProfile, getAllProfile, loginUser, profile, registerUser, updateProfile } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/profile", profile);
userRouter.put("/profile", updateProfile);
userRouter.get("/users", getAllProfile);
userRouter.get("/users/:id", deleteUserProfile);

export default userRouter;