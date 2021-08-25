const { Movie, Cinema, CinemaPhoto } = require("../models");
const { Op } = require("sequelize");
const nonAccentVietnamese = require("../utils/nonAccentVietnamese");

module.exports = {
  index: async (req, res) => {
    const unsignedName = req.params.unsignedName;
    const query = req.query.movie ? nonAccentVietnamese(req.query.movie) : "";

    const cinema = await Cinema.findOne({
      where: {
        unsignedName: unsignedName,
      },
      include: [
        {
          model: Movie,
          where: {
            unsignedName: {
              [Op.iLike]: `%${query}%`,
            },
          },
          required: false,
        },
        { model: CinemaPhoto },
      ],
    });
    res.render("cinema/index", { cinema });
  },
  all: async (req, res) => {
    // const movies = await Movie.findAll();
    const query = req.query.movie ? nonAccentVietnamese(req.query.movie) : "";

    const page = +req.query.page || 1;
    if (page < 0) page = 1;
    const offset = (page - 1) * 8;

    const { count, rows } = await Movie.findAndCountAll({
      where: {
        unsignedName: {
          [Op.iLike]: `%${query}%`,
        },
      },
      limit: 8,
      offset,
    });
    const movies = await Movie.findAll({
      where: {
        unsignedName: {
          [Op.iLike]: `%${query}%`,
        },
      },
      limit: 8,
      offset,
    });
    const nPages = Math.ceil(count / 8);
    const pageItems = [];
    for (let i = 1; i <= nPages; i++) {
      const item = {
        value: i,
        isActive: i === page,
      };
      pageItems.push(item);
    }
    res.render("cinema/all", {
      query,
      movies,
      pageItems,
      prev: page - 1,
      next: page + 1,
      canPrev: page > 1,
      canNext: page < nPages,
    });
    // res.json(cinema.Movies);
  },
};
