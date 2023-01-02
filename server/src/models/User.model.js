const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    gender: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("User", userSchema);
