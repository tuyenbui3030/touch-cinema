const { Movie, MoviePhoto } = require("../models");
const moment = require("moment");

module.exports = {
  index: async (req, res) => {
    const movie = await Movie.findOne({
      where: {
        unsignedName: req.params.unsignedName,
      },
      include: [{ model: MoviePhoto }],
    });
    res.render("detail/index", { movie, moment });
  },
};
