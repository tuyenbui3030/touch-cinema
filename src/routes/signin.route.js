const express = require("express");
const signinController = require("../controllers/signin.controller");
const router = express.Router();

router.get("/", signinController.index);

module.exports = router;
