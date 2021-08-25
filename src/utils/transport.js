const nodemailer = require("nodemailer");
const devConfig = require("../config/dev.json");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: devConfig.mailer.username,
    pass: devConfig.mailer.password,
  },
});
module.exports = transporter;
