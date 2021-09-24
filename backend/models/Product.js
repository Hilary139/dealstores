const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  sellerName: {
      type: String,
      required: true,
  },
  pickupLocation: {
      type: String,
      required: true,
  },
  sellerNumber: {
      type: Number,
      required: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;