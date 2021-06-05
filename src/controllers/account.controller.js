const {
  Movie,
  Booking,
  User,
  Ticket,
  Showtime,
  Room,
  Typeroom,
  Cinema,
} = require("../models");

const moment = require("moment");
const QRCode = require("qrcode");

module.exports = {
  profile: async (req, res) => {
    const userId = req.session.passport.user.id;
    let infoUser = await User.findOne({
      where: {
        id: userId,
      },
      include: [
        {
          model: Booking,
          required: false,
          where: {
            status: true,
          },
          include: [
            {
              model: Ticket,
              include: [
                {
                  model: Booking,
                  include: [
                    {
                      model: Showtime,
                      include: [
                        Movie,
                        {
                          model: Room,
                          include: [Typeroom, Cinema],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      order: [[Booking, "createdAt", "DESC"]],
    });
    const listBooking = infoUser.Bookings;
    let listTicket = [];
    // const result = await QRCode.toDataURL("I am a pony!");
    // console.log("============>", result);

    // listBooking.forEach((booking) => {
    //   booking.Tickets.forEach((ticket) => {
    //     listTicket.push({
    //       ticketId: ticket.id,
    //       seat: ticket.seat.toUpperCase(),
    //       price: ticket.price,
    //       bookingTime: ticket.Booking.bookingTime,
    //       timeStart: ticket.Booking.Showtime.timeStart,
    //       movie: ticket.Booking.Showtime.Movie.name,
    //       time: ticket.Booking.Showtime.Movie.time,
    //       poster: ticket.Booking.Showtime.Movie.poster,
    //       room: ticket.Booking.Showtime.Room.name,
    //       typeRoom: ticket.Booking.Showtime.Room.Typeroom.type,
    //       cinema: ticket.Booking.Showtime.Room.Cinema.name,
    //     });
    //   });
    // });

    for (const booking of listBooking) {
      for (const ticket of booking.Tickets) {
        listTicket.push({
          ticketId: ticket.id,
          qrCode: await QRCode.toDataURL(ticket.id),
          seat: ticket.seat.toUpperCase(),
          price: ticket.price,
          bookingTime: ticket.Booking.bookingTime,
          timeStart: ticket.Booking.Showtime.timeStart,
          movie: ticket.Booking.Showtime.Movie.name,
          time: ticket.Booking.Showtime.Movie.time,
          poster: ticket.Booking.Showtime.Movie.poster,
          room: ticket.Booking.Showtime.Room.name,
          typeRoom: ticket.Booking.Showtime.Room.Typeroom.type,
          cinema: ticket.Booking.Showtime.Room.Cinema.name,
        });
      }
    }

    res.render("account/profile", { infoUser, listTicket, moment });
  },
  edit: async (req, res) => {
    const user = await User.findByPk(req.session.passport.user.id);
    res.render("account/edit", { user });
  },
  submitEdit: async (req, res) => {
    const { fullname, email, phone } = req.body;
    res.send({
      fullname,
      email,
      phone,
    });
    res.redirect("/account/profile");
  },
};
