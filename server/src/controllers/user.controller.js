const mongoose = require("mongoose");
const createError = require("http-errors");
const User = require("../models/User.model");
const userValidator = require("../validators/user.validator");
const tokenHelper = require("../helpers/tokenHelper");

module.exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      _id: mongoose.Types.ObjectId(req.payload._id),
    });
    if (!user) throw createError.NotFound();
    const accessToken = await tokenHelper.signAccessToken({
      _id: user.id,
      email: user.email,
    });
    res.send({ user, accessToken });
  } catch (error) {
    next(error);
  }
};

module.exports.addUser = async (req, res, next) => {
  try {
    const isExist = await User.exists({
      _id: mongoose.Types.ObjectId(req.payload._id),
    });
    if (isExist) throw createError.Conflict();
    const result = await userValidator.addUser.validateAsync(req.body);
    const user = new User({
      _id: new mongoose.Types.ObjectId(req.payload._id),
      email: req.payload.email,
      ...result,
    });
    await user.save();
    const accessToken = await tokenHelper.signAccessToken({
      _id: user.id,
      email: user.email,
    });
    res.send({ user, accessToken });
  } catch (error) {
    next(error);
  }
};
