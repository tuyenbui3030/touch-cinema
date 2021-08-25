const express = require("express");

const restrict = require("../../middlewares/authAdmin.middleware");

const statisticalController = require("../../controllers/admin/statistical.controller");
const router = express.Router();

router.post("/movie", statisticalController.movie);
router.post("/cinema", statisticalController.cinema);

module.exports = router;
