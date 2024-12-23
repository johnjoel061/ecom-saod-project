import { User }  from "../models/userModel.js";
import bcrypt from "bcrypt";
import expressAsyncHandler from "express-async-handler";

// @dest Register a new user
// @router /api/users
// @access Public

export const registerUser = expressAsyncHandler(async (req, res) => {
    const {name, email, password} = req.body;

    try {
        // Find if the user already exists
        const userExists = await User.findOne({email});

        if (userExists) {
            return res.status(400).json({message: "User Already Exists"});
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        if(user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            });
        }else{
            res.status(400).json({message: "Invalid User Data"});
        }

    } catch (error) {
        
    }
});