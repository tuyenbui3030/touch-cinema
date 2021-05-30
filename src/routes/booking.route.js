const express = require("express");
const bookingController = require("../controllers/movieBooking.controller");
const restrict = require("../middlewares/checkstatus.middleware");
const router = express.Router();

// router.get("/", bookingController.movieBooking);
router.get("/seat", restrict, bookingController.seatBooking);
router.get("/pay", restrict, bookingController.payBooking);

module.exports = router;
