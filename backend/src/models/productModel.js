import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vendor",
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: true,
    },
    image: [String],
    variations: [productVariationSchema],
    ratingAverage: {
        type: Number,
        default: 0,
    },
    ratingQuantity: {
        type: Number,
        default: 0,
    },
});