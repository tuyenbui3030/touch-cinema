const { Movie, Cinema, CinemaPhoto } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  index: async (req, res) => {
    const id = req.params.id;
    const query = req.query.movie || "";

    const cinema = await Cinema.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: Movie,
          where: {
            name: {
              [Op.iLike]: `%${query}%`,
            },
          },
        },
        { model: CinemaPhoto },
      ],
    });
    // res.json(cinema);
    res.render("cinema/index", { cinema });
  },
  all: async (req, res) => {
    // const movies = await Movie.findAll();
    const query = req.query.movie || "";
    const movies = await Movie.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });
    res.render("cinema/all", { movies });
    // res.json(cinema.Movies);
  },
};
