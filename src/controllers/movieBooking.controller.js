const moment = require("moment");
const {
  Cinema,
  Showtime,
  Room,
  Movie,
  Typeroom,
  Booking,
  Ticket,
  BookingDetail,
} = require("../models");

const http = require("http");
const socketio = require("socket.io");
const express = require("express");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// const processText =(inputText) => {
//   let output = [];
//   let json = inputText.split(' ');
//   json.forEach(function (item) {
//       output.push(item.replace(/\'/g, '').split(/(\d+)/).filter(Boolean));
//   });
//   return output;
// }

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

    //Lọc ghế đã có người đặt
    const existsSeat = [];
    const listSeat = showtime.Bookings.map((x) => x.Tickets);
    listSeat.forEach((objTicket) => {
      objTicket.forEach((seats) => {
        existsSeat.push(seats.seat);
      });
    });

    const rows = showtime.Room.row;
    const cols = showtime.Room.col;

    const mapRoom = Array.from(Array(rows), () => new Array(cols));

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const seat = `${String.fromCharCode(row + 97)}${col + 1}`;
        const status = !existsSeat.includes(seat);
        mapRoom[row][col] = {
          seat,
          status,
        };
      }
    }
    // function myFunc(arg) {
    //   console.log(`arg was => ${arg}`);
    // }

    // await setTimeout(myFunc, 10000, "funky");

    res.render("booking/seatBooking", {
      layout: "../views/layouts/layoutBooking.ejs",
      moment,
      showtime,
      mapRoom,
    });
  },
  payBooking: async (req, res) => {
    // res.json(req.body);

    const { showtimeId, priceTicket, cb } = req.body;
    const total = Number(priceTicket) * cb.length;
    //Tạo Booking mới, với trạng thái chưa thanh toán
    const resultBooking = await Booking.create({
      userId: req.session.passport.user.id,
      showtimeId,
      bookingTime: new Date(),
      total,
      status: false,
    });
    //Tạo vé mới
    cb.forEach(async function (element) {
      let resultTicket = await Ticket.create({
        bookingId: resultBooking.id,
        seat: element,
        rowAddress: "a",
        colAddress: "1",
        // rowAddress: element.match(/\d+/g),
        // colAddress: element.match(/[a-zA-Z]+/g),
      });

      let resultBookingDetail = await BookingDetail.create({
        bookingId: resultBooking.id,
        ticketId: resultTicket.id,
      });
    });

    await setTimeout(async () => {
      const insertResult = await Booking.destroy({
        where: {
          id: resultBooking.id,
          status: false,
        },
      });
      console.log(insertResult);
    }, 1000 * 60 * 1);

    let showtime = await Showtime.findOne({
      where: {
        uuid: showtimeId,
      },
      include: [
        Movie,
        {
          model: Room,
          include: [Cinema, Typeroom],
        },
      ],
    });
    const seat = cb.join(", ");
    // res.send(showtime);

    res.render("booking/payBooking", {
      layout: "../views/layouts/layoutBooking.ejs",
      moment,
      showtime,
      seat,
    });
  },
};
