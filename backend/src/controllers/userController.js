import { User } from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../utils/utils.js"
import { AppError } from "../middlewares/errorHandler.js";

// @dest Register a new user
// @router /api/users/login  
// @access Public
export const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    // Find if the user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      phone,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    // Handle errors
    console.error("Error in registerUser:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});


// @dest Login a user
// @router /api/users/login
// @access Public
export const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({email});

  // Find if the user exists
  const userExists = await User.findOne({ email });
  if (userExists && (await user.comparePassword(password, user.password))){
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    })
  } else{
    throw new Error("Invalid Email or Password!");
  }
});

// @dest Get user profile
// @router /api/users/profile
// @access Private
export const profile = expressAsyncHandler(async (req, res) => {
  const { _id } = req.body;

  // Find the user by ID
  const user = await User.findOne(_id);
  if (user){
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone,
      isActive: user.isActive
    });
  } else{
    throw new Error("User Not Found! ");
  }
});

// @dest Update user profile
// @router /api/users/profile
// @access Private
export const updateProfile = expressAsyncHandler(async (req, res) => {
  const { _id } = req.body;

  // Find the user by ID
  const user = await User.findOne(_id);
  if (user){
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    user.address = req.body.address || user.address;
    user.phone = req.body.phone || user.phone;

    const updateUser = await User.save()
     
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone,
      isActive: user.isActive,
      address: user.address
    });
  } else{
    throw new Error("User Not Found! ");
  }
});


// @dest Get All user profile
// @router /api/users/profile
// @access Private
export const getAllProfile = expressAsyncHandler(async (req, res) => {
  // Find the user by ID
  const users = await User.find();
  if (users){
    res.json(users);
  } else{
    throw new Error("User Not Found! ");
  }
});


// @dest Delete user profile
// @router /api/users/profile
// @access Private
export const deleteUserProfile = expressAsyncHandler(async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User Removed!" });
  } catch (error) {
    throw new AppError("User Not Found!");
    
  }
});
