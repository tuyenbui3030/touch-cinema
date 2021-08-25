const { User } = require("../../models");

const passport = require("passport");
const bcrypt = require("bcryptjs");
const devConfig = require("../../config/dev.json");

const passportLocalAdmin = require("../../utils/passportLocalAdmin");

passportLocalAdmin();

module.exports = {
  index: async (req, res) => {
    const message = req.flash("error");
    res.render("admin/signin/index", {
      layout: false,
      message,
    });
  },
  submitLogin: passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/admin/signin",
    failureFlash: "Mật khẩu hoặc Email không chính xác",
  }),
  // submitLogin: async (req, res) => {
  //   res.json(req.body);

  // },
};
