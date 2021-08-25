module.exports = (req, res, next) => {
  if (req.isAuthenticated() && req.session.passport.user.role === 1) {
    return res.redirect(`/admin/cinema`);
  }
  next();
};
