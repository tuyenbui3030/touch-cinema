const { Movie, Cinema, CinemaPhoto } = require("../models");

module.exports = {
  index: async (req, res) => {
    const id = req.params.id;
    const cinema = await Cinema.findOne({
      where: {
        id: id,
      },
      include: [Movie, CinemaPhoto],
    });
    res.render("cinema/index", { cinema });
  },
  all: async (req, res) => {
    const id = req.params.id;
    const movies = await Movie.findAll();
    res.render("cinema/all", { movies });
    // res.json(cinema.Movies);
  },
};
