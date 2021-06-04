const express = require("express");
const accountController = require("../controllers/account.controller");
const router = express.Router();

router.get("/profile", accountController.profile);

module.exports = router;
