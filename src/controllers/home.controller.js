const { Movie } = require("../models");

module.exports = {
  index: async (req, res) => {
    const movies = await Movie.findAll({
      order: [["sold", "DESC"]],
      limit: 8,
    });
    const openDays = await Movie.findAll({
      order: [["openingDay", "ASC"]],
      limit: 4,
    });
    res.render("home/index", { movies, openDays });
  },
  checkLogin: async (req, res) => {
    res.json(req.isAuthenticated());
  },
};
