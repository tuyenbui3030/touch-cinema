const moment = require("moment");
const { Cinema, Showtime, Room, Typeroom } = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  showtime: async (req, res) => {
    const movieId = req.body.movieId;
    const date = await Showtime.findAll({
      attributes: ["timeStart"],
      where: {
        movieId: req.body.movieId,
      },
    });
    const resultDate = date.map((item) =>
      moment(item.timeStart).format("YYYY-MM-DD")
    );
    const listDate = resultDate.filter((item, index) => {
      return resultDate.indexOf(item) === index;
    });
    //////////////////test/////////////////////
    const cinemas = await Cinema.findAll({
      include: [
        {
          model: Room,
          required: true,
          left: false,
          include: [
            {
              model: Showtime,
              order: [["timeStart", "ASC"]],
              required: true,
              include: [
                {
                  model: Room,
                },
              ],
              where: {
                [Op.and]: [
                  Sequelize.where(
                    Sequelize.fn("date", Sequelize.col("timeStart")),
                    listDate[0]
                  ),
                  { movieId: req.body.movieId },
                ],
              },
            },
            {
              model: Typeroom,
            },
          ],
        },
      ],
    });
    res.render("movie/showtime", {
      moment,
      listDate,
      cinemas,
      movieId,
      layout: false,
    });
    // res.render("movie/showtime", { layout: false });
  },
  showtimeDate: async (req, res) => {
    const movieId = req.body.movieId;
    const date = req.body.date;

    const cinemas = await Cinema.findAll({
      include: [
        {
          model: Room,
          required: true,
          left: false,
          include: [
            {
              model: Showtime,
              required: true,
              order: [["timeStart", "ASC"]],
              include: [
                {
                  model: Room,
                },
              ],
              where: {
                [Op.and]: [
                  Sequelize.where(
                    Sequelize.fn("date", Sequelize.col("timeStart")),
                    date
                  ),
                  { movieId },
                ],
              },
            },
          ],
        },
      ],
    });
    console.log(cinemas);
    res.render("movie/showtimeDate", {
      moment,
      cinemas,
      layout: false,
    });
    // res.render("movie/showtime", { layout: false });
  },
};
