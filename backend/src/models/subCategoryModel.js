import mongoose from "mongoose";
import slugify from "slugify";
import { brandSchema } from "./brandModel";

const subcategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    slug: String,
  },
  { timestamps: true }
);

subcategorySchema.pre("save", async function (next) {
  this.slug = slugify(this.name.toLowerCase());
  next();
});

export const SubCategory = mongoose.model("SubCategory", subcategorySchema);
