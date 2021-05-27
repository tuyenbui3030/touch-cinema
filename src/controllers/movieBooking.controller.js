const moment = require("moment");
const {
  Cinema,
  Showtime,
  Room,
  Movie,
  Typeroom,
  Booking,
  Ticket,
} = require("../models");

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
        {
          model: Booking,
          include: Ticket,
        },
      ],
    });

    // res.json(showtime.Bookings);
    // const listSeat = showtime.Bookings.map((x) => x.Tickets);
    const resultSeat = [];
    const listSeat = showtime.Bookings.map((x) => x.Tickets);
    listSeat.forEach((objTicket) => {
      objTicket.forEach((seats) => {
        resultSeat.push(seats.seat);
      });
    });
    // const test = listSeat[0].map((x) => x.seat);
    res.json(resultSeat);
    console.log("Nè ==============>");
    const rows = showtime.Room.row;
    const cols = showtime.Room.col;

    const mapRoom = Array.from(Array(rows), () => new Array(cols));

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
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
