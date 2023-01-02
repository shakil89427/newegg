const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    blob: [{ _id: false, type: { type: String }, url: { type: String } }],
    category: String,
    creationDate: Number,
    description: String,
    highlights: [String],
    inPrice: Number,
    inStrikeThroughPrice: Number,
    usPrice: Number,
    usStrikeThroughPrice: Number,
    name: String,
    quantityLeft: Number,
    rating: { ratingCount: { type: Number }, reviewCount: { type: Number } },
    sellerId: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("Product", productSchema);
