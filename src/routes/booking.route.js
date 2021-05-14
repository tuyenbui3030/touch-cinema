const express = require("express");
const bookingController = require("../controllers/movieBooking.controller");
const router = express.Router();

router.get("/", bookingController.movieBooking);
router.get("/seat", bookingController.seatBooking);

module.exports = router;
