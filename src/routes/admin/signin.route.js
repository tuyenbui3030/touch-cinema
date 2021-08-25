const express = require("express");
const restrict = require("../../middlewares/notAuthAdmin.middleware");
const signupController = require("../../controllers/admin/signin.controller");
const router = express.Router();

router.get("/", restrict, signupController.index);
router.post("/", signupController.submitLogin);

module.exports = router;
