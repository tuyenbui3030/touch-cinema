const { User } = require("../models");
const devConfig = require("../config/dev.json");

const passport = require("passport");
const transporter = require("../utils/transport");
const bcrypt = require("bcryptjs");
const randomstring = require("randomstring");

const initPassportFacebook = require("../utils/passportFacebook");
const initPassportGoogle = require("../utils/passportGoogle");
const initPassportLocal = require("../utils/passportLocal");

//Khởi tạo các loại signin
initPassportFacebook();
initPassportGoogle();
initPassportLocal();

module.exports = {
  //render giao diện signin
  index: async (req, res) => {
    const message = req.flash("error");
    res.render("signin/index", { message });
  },
  //Signin FB
  authenticate: passport.authenticate("facebook", { scope: ["email"] }),
  authenticateRedirect: passport.authenticate("facebook", {
    successRedirect: "/",
    // successReturnToOrRedirect: "/",
    failureRedirect: "/signin",
    failureFlash: "Đăng nhập thất bại, có thể thông tin đã tồn tại",
  }),
  //Signin GG
  authenticateGoogle: passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  }),
  authenticateGoogleRedirect: passport.authenticate("google", {
    successRedirect: "/",
    // successReturnToOrRedirect: "/",
    failureRedirect: "/signin",
    failureFlash: "Đăng nhập thất bại, có thể thông tin đã tồn tại",
  }),
  //SigninLocal
  singinLocal: passport.authenticate("local", {
    successRedirect: "/",
    // successReturnToOrRedirect: "/",
    failureRedirect: "/signin",
    failureFlash: "Mật khẩu hoặc Email không chính xác",
  }),

  forgotIndex: async (req, res) => {
    res.render("signin/forgot", { message: req.flash("error") });
  },

  forgotSubmit: async (req, res) => {
    const domain = req.protocol + "://" + req.get("host");
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user === null) {
      req.flash("error", `${req.body.email} không có trong hệ thống!`);
    } else {
      await transporter
        .sendMail({
          from: "notolistore@gmail.com",
          to: req.body.email,
          subject: "Forget Password Touch Cinema",
          text: "Click here to change password",
          html: `
        <p style="font-weight:bold">Gửi ${user.fullname}!</p>
        <h2 style="color:#ff4444">Chúng tôi nhận được yêu cầu quên mật khẩu của bạn</h2>
        <p style="font-size:14px">Click <a href="${domain}/signin/change?token=${user.token}"> vào đây</a> để thực hiện đổi mật khẩu!</p>
        <p style="font-weight:bold">Touch cinema CARE</p>`,
        })
        .then(
          req.flash(
            "error",
            `Vui lòng kiểm tra email ${req.body.email}. Chúng tối đã gửi yêu cầu tạo mật khẩu mới`
          )
        )
        .catch(req.flash("error", "Hệ thống quá tải, vui lòng thử lại sau"));
    }
    res.redirect("/signin/forgot");
  },
  changeIndex: async (req, res) => {
    const result = await User.findOne({
      where: {
        token: req.query.token,
      },
    });
    if (!result) throw new Error("Bùm bùm bùm chiuuuuuu");
    console.log(req.originalUrl);
    res.render("signin/change", {
      message: req.flash("error"),
      token: req.query.token,
    });
  },
  changeSubmit: async (req, res) => {
    if (req.body.password === req.body.verifyPassword) {
      const result = await User.update(
        {
          password: bcrypt.hashSync(
            req.body.password,
            devConfig.authentication.saltRounds
          ),
          token: randomstring.generate(100),
        },
        {
          where: {
            token: req.body.token,
          },
        }
      );
      if (result[0] === 0) throw new Error("Bùm chiuuuuu chiu bùm chiuuu");
      req.flash(
        "error",
        "Đổi mật khẩu thành công, bây giờ bạn có thể đăng nhập để mua vé"
      );
      res.redirect("/signin");
    } else {
      req.flash("error", "Mật khẩu mới và mật khẩu nhập lại không giống nhau");
      res.redirect(`/signin/change?token=${req.body.token}`);
    }
  },
};
