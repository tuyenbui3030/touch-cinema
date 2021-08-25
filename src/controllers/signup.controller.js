const { User } = require("../models");

const bcrypt = require("bcryptjs");
const devConfig = require("../config/dev.json");
const randomstring = require("randomstring");
const transporter = require("../utils/transport");

module.exports = {
  index: async (req, res) => {
    res.render("signup/index", { message: req.flash("error") });
  },
  submit: async (req, res) => {
    const domain = req.protocol + "://" + req.get("host");
    const token = randomstring.generate(100);

    const hashedPassword = bcrypt.hashSync(
      req.body.password,
      devConfig.authentication.saltRounds
    );
    try {
      const checkEmail = await User.findOne({
        where: { email: req.body.email },
      });
      const checkPhone = await User.findOne({
        where: { phone: req.body.phone },
      });
      if (checkEmail) throw `Email ${req.body.email} đã tồn tại trong hệ thống`;
      if (checkPhone)
        throw `Số điện thoại ${req.body.phone} đã tồn tại trong hệ thống`;

      await User.create({
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPassword,
        verified: false,
        token,
      });
      await transporter
        .sendMail({
          from: "notolistore@gmail.com",
          to: req.body.email,
          subject: "Verify Account",
          text: "Click Here to verify",
          html: `
          <p style="font-weight:bold">Gửi ${req.body.fullname}!</p>
          <h2 style="color:#ff4444">Cảm ơn bạn đăng kí tài khoản hệ thống rạp phim Touch Cinema</h2>
          <p style="font-size:14px">Click <a href="${domain}/signup/verify?token=${token}"> vào đây</a> để cập xác thực tài khoản!</p>
          <p style="font-weight:bold">Touch cinema</p>`,
        })
        .then(console.log)
        .catch(console.error);

      req.flash("error", "Đăng ký thành công, vui lòng xác thực email");
      res.redirect("/signin");
    } catch (err) {
      console.log(err);
      req.flash("error", err);
      res.redirect("/signup");
    }
  },
  verify: async (req, res) => {
    const result = await User.update(
      {
        verified: true,
        token: randomstring.generate(100),
      },
      {
        where: {
          token: req.query.token,
        },
      }
    );
    if (result[0] === 0) throw new Error("Bùm chiuuuuu chiu bùm chiuuu");
    res.render("signup/verify");
  },
};
