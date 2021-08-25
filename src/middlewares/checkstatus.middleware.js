const { User } = require("../models");

module.exports = async (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "Vui lòng đăng nhập để tiến hành đặt vé");
    req.session.returnTo = req.originalUrl;
    res.redirect(`/signin`);
  } else {
    const id = req.session.passport.user.id;
    const user = await User.findOne({
      attributes: ["phone", "email"],
      where: {
        id,
      },
    });
    if (!(user.email && user.phone)) {
      req.flash("error", "Vui lòng cập nhật email và số điện thoại");
      req.session.returnTo = req.originalUrl;
      res.redirect(`/account/edit?retUrl=${req.originalUrl}`);
    }
  }
  next();
};
