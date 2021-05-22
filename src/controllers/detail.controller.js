const { Movie, Cinema, CinemaPhoto } = require("../models");

module.exports = {
  index: async (req, res) => {
    const movie = await Movie.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.render("detail/index", { movie });
  },
};
