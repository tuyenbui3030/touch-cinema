const express = require("express");
// const restrict = require("../middlewares/notAuth");
const signupController = require("../../controllers/admin/signin.controller");
const router = express.Router();

router.get("/", signupController.index);
module.exports = router;
