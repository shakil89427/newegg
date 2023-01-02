const joi = require("joi");

module.exports.getProducts = joi.object({
  category: joi.string().required().lowercase(),
  skip: joi.number().default(0),
});

module.exports.getProduct = joi.object({
  _id: joi.string().required(),
});
