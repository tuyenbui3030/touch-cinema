const moment = require("moment");
const { Cinema, Showtime, Room, Movie, Typeroom } = require("../models");

module.exports = {
  movieBooking: async (req, res) => {
    res.render("booking/movieBooking");
  },
  seatBooking: async (req, res) => {
    const uuid = req.query.showtime;

    const showtime = await Showtime.findOne({
      where: {
        uuid,
      },
      include: [
        Movie,
        {
          model: Room,
          include: [Cinema, Typeroom],
        },
      ],
    });
    const rows = 20; //showtime.Room.row;
    const cols = 20; //showtime.Room.col;
    const maxRow = 65 + showtime.Room.row;
    const mapRoom = Array.from(Array(rows), () => new Array(cols));

    for (let row = 0; row < 20; row++) {
      for (let col = 0; col < 20; col++) {
        mapRoom[row][col] = `${String.fromCharCode(row + 97)}${col + 1}`;
      }
    }

    // console.log(mapRoom);

    // res.send(mapRoom);
    res.render("booking/seatBooking", {
      layout: "../views/layouts/layoutBooking.ejs",
      moment,
      showtime,
      mapRoom,
    });
  },
};
