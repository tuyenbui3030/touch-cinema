const express = require("express");

const restrict = require("../../middlewares/authAdmin.middleware");

const dashboardController = require("../../controllers/admin/dashboard.controller");
const router = express.Router();

router.get("/", restrict, dashboardController.index);
module.exports = router;
