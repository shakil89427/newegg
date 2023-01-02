const createError = require("http-errors");
const mongoose = require("mongoose");
const Product = require("../models/Product.model");
const productValidator = require("../validators/product.validator");

module.exports.getProducts = async (req, res, next) => {
  try {
    const { category, skip } = await productValidator.getProducts.validateAsync(
      req.query
    );
    const result = await Product.find({ category })
      .sort({ creationDate: -1 })
      .skip(skip)
      .limit(12);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

module.exports.getProduct = async (req, res, next) => {
  try {
    const { _id } = await productValidator.getProduct.validateAsync(req.params);
    const result = await Product.findOne({ _id: mongoose.Types.ObjectId(_id) });
    if (!result) throw createError.NotFound();
    res.send(result);
  } catch (error) {
    next(error);
  }
};
