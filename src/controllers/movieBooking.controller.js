const moment = require("moment");
const paypal = require("paypal-rest-sdk");
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
      const col = element.match(/\d+/g);
      const row = element.match(/[a-zA-Z]+/g);
      let resultTicket = await Ticket.create({
        bookingId: resultBooking.id,
        seat: element,
        rowAddress: row[0],
        colAddress: col[0],
        price: Number(priceTicket),
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
    const seat = cb.join(", ");
    // res.send(showtime);

    req.session.bookingId = resultBooking.id;

    res.render("booking/payBooking", {
      layout: "../views/layouts/layoutBooking.ejs",
      moment,
      showtime,
      seat,
    });
  },
  actionPay: async (req, res) => {
    const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "http://localhost:3000/booking/success",
        cancel_url: "http://localhost:3000/booking/cancel",
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: "Vé xem phim mắt biếc 1",
                sku: "001",
                price: "5.00",
                currency: "USD",
                quantity: 1,
              },
              {
                name: "Vé xem phim mắt biếc 2",
                sku: "002",
                price: "5.00",
                currency: "USD",
                quantity: 1,
              },
            ],
          },
          amount: {
            currency: "USD",
            total: "10.0",
          },
          description: "Hat for the best team ever",
        },
      ],
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        res.render("cancle");
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

    const execute_payment_json = {
      payer_id: payerId,
      transactions: [
        {
          amount: {
            currency: "USD",
            total: "10.0",
          },
        },
      ],
    };

    paypal.payment.execute(
      paymentId,
      execute_payment_json,
      async function (error, payment) {
        if (error) {
          res.render("cancle");
        } else {
          console.log(JSON.stringify(payment));
          const result = await Booking.update(
            {
              status: true,
            },
            {
              where: {
                id: req.session.bookingId,
              },
            }
          );
          res.send("OK");
        }
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
};
