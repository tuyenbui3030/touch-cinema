const express = require("express");
// const restrict = require("../../middlewares/authAdmin.middleware");
const signupController = require("../../controllers/admin/signin.controller");
const router = express.Router();

router.get("/", signupController.index);
router.post("/", signupController.submitLogin);

module.exports = router;
