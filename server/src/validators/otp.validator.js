const joi = require("joi");

module.exports.sendOtp = joi.object({
  email: joi.string().required().email().lowercase(),
});

module.exports.verifyOtp = joi.object({
  otp: joi.string().required().min(6).max(6),
  email: joi.string().required().email().lowercase(),
});
