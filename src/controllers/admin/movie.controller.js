const { Movie, MoviePhoto, CinemaMovie } = require("../../models");
const randomstring = require("randomstring");
const { promisify } = require("util");
const fs = require("fs");
const rename = promisify(fs.rename);
const moment = require("moment");
const nonAccentVietnamese = require("../../utils/nonAccentVietnamese");

module.exports = {
  index: async (req, res) => {
    const movies = await Movie.findAll();
    // res.json(movies);
    const checkPage = req.originalUrl;

    res.render("admin/movie/index", {
      movies,
      moment,
      checkPage,
      layout: "admin/layouts/layout.ejs",
    });
  },
  newMovie: async (req, res) => {
    const { name, trailer, time, openingDay, description, saveImg } = req.body;
    const { poster, images } = req.files;
    const namePoster = randomstring.generate(7) + "-" + poster[0].originalname;
    await rename(poster[0].path, `src/public/images/content/${namePoster}`);

    const movie = await Movie.create({
      name,
      unsignedName: nonAccentVietnamese(name),
      openingDay,
      poster: namePoster,
      trailer,
      description,
      time,
      sold: 0,
    });
    if (images) {
      images.forEach(async (image) => {
        if (saveImg.includes(image.originalname)) {
          let namePhoto = randomstring.generate(7) + "-" + image.originalname;
          await MoviePhoto.create({
            name: namePhoto,
            movieId: movie.id,
          });
          await rename(image.path, `src/public/images/content/${namePhoto}`);
        }
      });
    }

    res.redirect("/admin/movie");
  },
  destroy: async (req, res) => {
    // const movieCinema = await CinemaMovie.destroy({
    //   where: {
    //     movieId: req.body.movieId,
    //   },
    // });
    const result = await Movie.destroy({
      where: {
        id: req.body.movieId,
      },
    });
    res.json(result);
  },
};
