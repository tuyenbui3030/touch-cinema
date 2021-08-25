const moment = require("moment");
const qr = require("qrcode");
const transporter = require("../utils/transport");

const paypal = require("paypal-rest-sdk");
const client = require("twilio")(
  "AC1b9f4307d8b4ed0576ba1f3cae401ecc",
  "8ae56fe759bd519f4ecfcfcb5c238fd3"
);
const {
  Cinema,
  Showtime,
  Room,
  Movie,
  Typeroom,
  Booking,
  Ticket,
  Cart,
} = require("../models");

paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
    "AZEFXwjPQGpnIdL3KsqktAy_9RhlNAzx0t9QAnxv-iN5jrr-UgSBZc71nIOf61A4kLHNcuCVpvjdElTg",
  client_secret:
    "EK2j2GyEGCKGcA12GN6zNmn2lz0us_1n0LcXPAhtmzTSypWyrkufleGXZmeQCP4e-sUiUuTlxC5I-VC3",
});

// const http = require("http");
// const socketio = require("socket.io");
// const express = require("express");

// const app = express();
// const server = http.createServer(app);
// const io = socketio(server);

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
    const userId = req.session.passport.user.id;
    await Cart.destroy({ where: { userId } });

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
    // req.session.bookingRoom = showtime.Room.name;
    // req.session.bookingCinema = showtime.Room.Cinema.name;
    req.session.booking = {
      movieId: showtime.Movie.id,
      movie: showtime.Movie.name,
      room: showtime.Room.name,
      cinema: showtime.Room.Cinema.name,
      typeroom: showtime.Room.Typeroom.type,
      time: showtime.timeStart,
      sold: showtime.Movie.sold,
      qrCode: "",
      poster: "",
      id: "",
      seat: "",
      qty: 0,
      total: 0,
    };
    //Lọc ghế đã có người đặt
    const existsSeat = [];
    const listSeat = showtime.Bookings.map((x) => x.Tickets);
    listSeat.forEach((objTicket) => {
      objTicket.forEach((seats) => {
        existsSeat.push(seats.seat);
      });
    });
    const newSeat = await Cart.findAll();
    newSeat.forEach((x) => existsSeat.push(x.seat));

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
    const { showtimeId, priceTicket, cb } = req.body;
    const qtySeat = cb.length;
    const total = Number(priceTicket) * qtySeat;
    //Tạo Booking mới, với trạng thái chưa thanh toán
    const resultBooking = await Booking.create({
      userId: req.session.passport.user.id,
      showtimeId,
      bookingTime: new Date(),
      total,
      status: false,
    });
    //Tạo vé mới
    let totalBooking = 0;
    cb.forEach(async function (element) {
      const col = element.match(/\d+/g);
      const row = element.match(/[a-zA-Z]+/g);
      let resultTicket = await Ticket.create({
        bookingId: resultBooking.id,
        seat: element,
        rowAddress: row[0],
        colAddress: col[0],
        price: Number(priceTicket),
      });
      totalBooking += resultTicket.price;
      console.log(`Hello ${totalBooking}`);
    });

    await setTimeout(async () => {
      const insertResult = await Booking.destroy({
        where: {
          id: resultBooking.id,
          status: false,
        },
      });
      console.log(insertResult);
    }, 1000 * 60 * 10);

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
    const seat = cb.join(", ").toUpperCase();
    // res.send(showtime);
    req.session.booking.seat = seat.toUpperCase();
    req.session.booking.id = resultBooking.id;

    res.render("booking/payBooking", {
      layout: "../views/layouts/layoutBooking.ejs",
      priceTicket,
      qtySeat,
      total,
      moment,
      showtime,
      seat,
    });
  },
  actionPay: async (req, res) => {
    const booking = await Booking.findOne({
      where: {
        id: req.session.booking.id,
      },
      include: [
        Ticket,
        {
          model: Showtime,
          include: [Movie],
        },
        // {
        //   model: Ticket,
        //   include: [Cinema, Typeroom],
        // },
      ],
    });
    const tickets = booking.Tickets;
    // Start - Liệt kê vé
    let items = [];
    let total = 0;
    tickets.forEach((item) => {
      items.push({
        name: `Phim: ${
          req.session.booking.movie
        } - Ghế: ${item.seat.toUpperCase()} - Phòng: ${
          req.session.booking.room
        } - Rạp: ${req.session.booking.cinema}`,
        sku: item.id,
        price: item.price,
        currency: "USD",
        quantity: 1,
      });
      total += item.price;
    });
    req.session.booking.total = total.toString();
    req.session.booking.qty = tickets.length;
    req.session.booking.poster = booking.Showtime.Movie.poster;
    // End - liệt kê vé
    const domain = req.protocol + "://" + req.get("host");

    const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: `${domain}/booking/success`,
        cancel_url: `${domain}/booking/cancel`,
      },
      transactions: [
        {
          item_list: {
            items,
          },
          amount: {
            currency: "USD",
            total: req.session.booking.total,
          },
          description: "Hat for the best team ever",
        },
      ],
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        res.render("booking/cancel");
      } else {
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === "approval_url") {
            res.redirect(payment.links[i].href);
          }
        }
      }
    });
  },
  success: async (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
    const checkPayment = await Booking.findOne({
      where: { id: req.session.booking.id, status: true },
    });
    if (checkPayment) {
      const infoPayment = req.session.booking;
      req.session.booking = null;
      return res.render("booking/success", { infoPayment });
    }
    const execute_payment_json = {
      payer_id: payerId,
      transactions: [
        {
          amount: {
            currency: "USD",
            total: req.session.booking.total,
          },
        },
      ],
    };

    paypal.payment.execute(
      paymentId,
      execute_payment_json,
      async function (error, payment) {
        if (error) {
          res.render("booking/cancel");
        } else {
          client.messages
            .create({
              body: `Mã đặt chỗ của bạn là: ${req.session.booking.id}. Ghế: ${req.session.booking.seat}. Phòng ${req.session.booking.room} - ${req.session.booking.typeroom}, Rạp ${req.session.booking.cinema}`,
              to: "+84338218374",
              from: "+14083594978",
            })
            .then((message) => console.log(message))
            // here you can implement your fallback code
            .catch((error) => console.log(error));
          console.log("===============>", req.session.booking);
          console.log(
            `Mã đặt chỗ của bạn là: ${req.session.booking.id}. Ghế: ${req.session.booking.seat}. Phòng ${req.session.booking.room} - ${req.session.booking.typeroom}, ${req.session.booking.cinema}`
          );
          console.log(JSON.stringify(payment));
          await transporter
            .sendMail({
              from: "notolistore@gmail.com",
              to: req.session.passport.user.email,
              subject: "Verify Account",
              text: "Click Here to verify",
              html: `Mã đặt chỗ của bạn là: ${req.session.booking.id}. Ghế: ${req.session.booking.seat}. Phòng ${req.session.booking.room} - ${req.session.booking.typeroom}, ${req.session.booking.cinema}`,
            })
            .then(console.log)
            .catch(console.error);
          const result = await Booking.update(
            {
              status: true,
            },
            {
              where: {
                id: req.session.booking.id,
              },
            }
          );
          const infoPayment = req.session.booking;
          req.session.booking.qrCode = await qr.toDataURL(infoPayment.id);
          // qr.toDataURL(infoPayment.id, (err, src) => {
          //   if (err) res.send("Error occured");
          //   res.render("booking/success", { infoPayment, src });
          // });
          return res.render("booking/success", { infoPayment });
          // res.render("booking/success");
        }
      }
    );
    // const movie = await Movie.findOne({
    //   where: {
    //     id: req.session.booking.movieId,
    //   },
    // });
    await Movie.update(
      {
        sold: req.session.booking.qty + req.session.booking.sold,
      },
      {
        where: {
          id: req.session.booking.movieId,
        },
      }
    );
  },
  addCart: async (req, res) => {
    const { showtimeId, seat } = req.body;
    const userId = req.session.passport.user.id;
    const resultCart = await Cart.create({ userId, seat, showtimeId });
    console.log(resultCart.id);
    await setTimeout(async () => {
      await Cart.destroy({
        where: {
          id: resultCart.id,
        },
      });
    }, 1000 * 60 * 10);
    res.json(resultCart);
  },
  delCart: async (req, res) => {
    const { showtimeId, seat } = req.body;
    const userId = req.session.passport.user.id;
    const destroyResult = await Cart.destroy({
      where: {
        showtimeId,
        userId,
        seat,
      },
    });
    console.log(destroyResult);
    res.json(destroyResult);
  },
  cancel: async (req, res) => {
    res.render("booking/fail");
  },
};
