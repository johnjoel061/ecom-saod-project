import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["user", "vendor", "admin"],
    default: "user",
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {timestamps: true}
)