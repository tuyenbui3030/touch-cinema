const express = require("express");
const signupController = require("../controllers/signup.controller");
const router = express.Router();

router.get("/", signupController.index);
router.post("/", signupController.submit);
module.exports = router;
