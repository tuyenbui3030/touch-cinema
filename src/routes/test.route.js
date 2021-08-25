const express = require("express");
const moment = require("moment");
const { Movie, Cinema, Showtime, Room } = require("../models");

const { Sequelize, Op } = require("sequelize");

const router = express.Router();

router.get("/:id", async (req, res) => {
  // const showtime = await Showtime.findAll({
  //   where: {
  //     [Op.and]: [
  //       Sequelize.where(
  //         Sequelize.fn("date", Sequelize.col("timeStart")),
  //         "2021-05-27"
  //       ),
  //       { movieId: 1 },
  //     ],
  //   },
  //   include: [
  //     {
  //       model: Room,
  //       include: [{ model: Cinema }],
  //     },
  //   ],
  // });
  //-----------------------------------
  const date = await Showtime.findAll({
    attributes: ["timeStart"],
    where: {
      movieId: 1,
    },
  });
  const resultDate = date.map((item) =>
    moment(item.timeStart).format("YYYY-MM-DD")
  );
  const listDate = resultDate.filter((item, index) => {
    console.log(item);
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
                  listDate[1]
                ),
                { movieId: req.params.id },
              ],
            },
          },
        ],
      },
    ],
  });

  // const test = await Cinema.findAll({ include: { all: true } });

  // res.json(cinemas);
  res.render("test/index", { moment, listDate, cinemas });
});
module.exports = router;
