const moment = require("moment");
const { Cinema, Showtime, Room, Typeroom } = require("../models");

module.exports = {
  movieBooking: async (req, res) => {
    res.render("booking/movieBooking");
  },
  seatBooking: async (req, res) => {
    const roomId = req.query.room;
    const movieId = req.query.movie;
    const timeStart = req.query.timeStart;
    const room = await Room.findOne({
      where: {
        id: roomId,
      },
      include: [{ model: Typeroom }],
    });
    // const showtime = await Showtime.findOne({
    //   where: {
    //     movieId,
    //     roomId,
    //     timeStart,
    //   },
    // });
    res.json(timeStart);
    res.render("booking/seatBooking", {
      layout: "../views/layouts/layoutBooking.ejs",
      moment,
      room,
      showtime,
    });
  },
};
