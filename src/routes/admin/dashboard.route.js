const express = require("express");
// const restrict = require("../middlewares/notAuth");
const dashboardController = require("../../controllers/admin/dashboard.controller");
const router = express.Router();

router.get("/", dashboardController.index);
module.exports = router;
