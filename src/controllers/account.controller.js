const { Movie, Booking, User, Ticket, Showtime } = require("../models");
const { Op } = require("sequelize");
const nonAccentVietnamese = require("../utils/nonAccentVietnamese");

module.exports = {
  profile: async (req, res) => {
    const userId = req.session.passport.user.id;
    const infoUser = await User.findOne({
      where: {
        id: userId,
      },
      include: [
        {
          model: Booking,
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
                        {
                          model: Movie,
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
    });
    const listBooking = infoUser.Bookings;
    let listTicket = [];
    // res.json(listBooking[0].Tickets[0].seat);
    listBooking.forEach((booking) => {
      booking.Tickets.forEach((ticket) => {
        listTicket.push({
          ticketId: ticket.id,
          seat: ticket.seat,
          price: ticket.price,
          bookingTime: ticket.Booking.bookingTime,
          movie: ticket.Booking.Showtime.Movie.name,
          time: ticket.Booking.Showtime.Movie.time,
        });
      });
    });
    // res.json(listTicket);
    res.render("account/profile", { infoUser, listTicket });
  },
};
