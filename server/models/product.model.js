const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [1, "Title must be at least 1 character"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        minlength: [1, "Price must be at least 1 character"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [1, "Description must be at least 1 character"]
    }
});

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;