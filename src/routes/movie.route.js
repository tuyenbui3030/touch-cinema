const express = require("express");
const movieController = require("../controllers/movie.controller");
const router = express.Router();

router.post("/showtime", movieController.showtime);
router.post("/showtimeDate", movieController.showtimeDate);

module.exports = router;
