const { Cinema } = require("../models");

module.exports = function (app) {
  //start - middleware - sidebar danh mục
  app.use(async function (req, res, next) {
    const rows = await Cinema.findAll();
    res.locals.lcCinema = rows;
    next();
  });
  //end - middleware - sidebar danh mục

  app.use(function (req, res, next) {
    if (req.session.passport === undefined) {
      req.session.passport = false;
    }
    res.locals.lcAuthUser = req.session.passport;
    next();
  });
};
