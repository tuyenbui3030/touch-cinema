// module.exports = (req, res, next) => {
//   if (req.isAuthenticated() && req.session.passport.user.role === 1) {
//     next();
//   }
//   res.redirect("/admin/signin");
// };
const { User } = require("../models");

module.exports = async (req, res, next) => {
  if (!req.isAuthenticated() || req.session.passport.user.role === 0) {
    req.flash("error", "Vui lòng đăng nhập để vào dashboard");
    req.session.returnTo = req.originalUrl;
    res.redirect(`/admin/signin`);
  }
  next();
};
