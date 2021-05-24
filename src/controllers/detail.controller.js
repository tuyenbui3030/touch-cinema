const { Movie } = require("../models");
const moment = require("moment");

module.exports = {
  index: async (req, res) => {
    const movie = await Movie.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.render("detail/index", { movie, moment });
  },
};
