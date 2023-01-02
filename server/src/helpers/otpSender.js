const nodemailer = require("nodemailer");

module.exports.sendOtp = (email) => {
  return new Promise((resolve, reject) => {
    let otp = Math.floor(Math.random() * 1000000).toString();
    while (otp.length !== 6) {
      otp = Math.floor(Math.random() * 1000000).toString();
    }

    let transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.OTP_SENDER_EMAIL,
        pass: process.env.OTP_SENDER_PASSWORD,
      },
    });

    let mailOption = {
      from: process.env.OTP_SENDER_EMAIL,
      to: email,
      subject: "Your login otp",
      text: `Your otp is ${otp}`,
    };

    transporter.sendMail(mailOption, (error, success) => {
      if (error) {
        reject(error);
      } else {
        resolve(otp);
      }
    });
  });
};
