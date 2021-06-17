const express = require("express");

const restrict = require("../../middlewares/authAdmin.middleware");

const cinemaController = require("../../controllers/admin/cinema.controller");
const router = express.Router();

router.get("/", cinemaController.index);
router.post("/new-cinema", cinemaController.newCinema);

module.exports = router;
