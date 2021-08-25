const express = require("express");
const restrict = require("../middlewares/notAuth");
const signupController = require("../controllers/signup.controller");
const router = express.Router();

router.get("/", restrict, signupController.index);
router.post("/", restrict, signupController.submit);
router.get("/verify", restrict, signupController.verify);
module.exports = router;
