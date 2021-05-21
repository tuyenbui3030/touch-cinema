const express = require("express");
const cinemaController = require("../controllers/cinema.controller");
const router = express.Router();

router.get("/:id", cinemaController.index);
router.get("/", cinemaController.all);

module.exports = router;
