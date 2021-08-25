const express = require("express");
const bookingController = require("../controllers/movieBooking.controller");
const restrict = require("../middlewares/checkstatus.middleware");
const router = express.Router();

// router.get("/", bookingController.movieBooking);
router.get("/seat", restrict, bookingController.seatBooking);
router.post("/addCart", restrict, bookingController.addCart);
router.post("/delCart", restrict, bookingController.delCart);
router.post("/pay", restrict, bookingController.payBooking);
router.post("/actionPay", bookingController.actionPay);
router.get("/success", bookingController.success);
router.get("/cancel", bookingController.cancel);

module.exports = router;
