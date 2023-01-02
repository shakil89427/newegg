const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: String,
    otp: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("Otp", otpSchema);
