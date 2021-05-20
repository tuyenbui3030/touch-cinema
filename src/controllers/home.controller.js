const { Movie } = require("../models");

module.exports = {
  index: async (req, res) => {
    const movies = await Movie.findAll({
      order: [["sold", "DESC"]],
    });
    const openDays = await Movie.findAll({
      order: [["openingDay", "ASC"]],
    });
    res.render("home/index", { movies, openDays });
  },
};
