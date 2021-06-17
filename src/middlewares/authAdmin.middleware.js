module.exports = (req, res, next) => {
  if (req.isAuthenticated() && req.session.passport.user.role === 1) {
    next();
  }
  res.redirect("/admin/signin");
};
