module.exports = {
  movieBooking: async (req, res) => {
    res.render("booking/movieBooking");
  },
  seatBooking: async (req, res) => {
    res.render("booking/seatBooking", { layout: false });
  },
};
