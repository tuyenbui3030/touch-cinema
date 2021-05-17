const passport = require("passport");
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
    failureRedirect: "/signin",
    failureFlash: "Đăng nhập thất bại, có thể thông tin đã tồn tại",
  }),
  //SigninLocal
  singinLocal: passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/signin",
    failureFlash: "Mật khẩu hoặc Email không chính xác",
  }),
};
