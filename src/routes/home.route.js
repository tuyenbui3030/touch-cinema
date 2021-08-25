const express = require("express");
const homeController = require("../controllers/home.controller");
const router = express.Router();

router.get("/", homeController.index);

router.post("/checkLogin", homeController.checkLogin);

module.exports = router;
