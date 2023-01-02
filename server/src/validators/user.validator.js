const joi = require("joi");

module.exports.addUser = joi.object({
  fullName: joi.string().required(),
  gender: joi.string().required(),
});
