const express = require("express");
const accountController = require("../controllers/account.controller");
const restrict = require("../middlewares/checkProfile.middleware");

const router = express.Router();

router.get("/profile", restrict, accountController.profile);

router.get("/edit", restrict, accountController.edit);
router.post("/edit", restrict, accountController.submitEdit);

router.get("/change-password", restrict, accountController.changePassword);
router.post(
  "/change-password",
  restrict,
  accountController.submitChangePassword
);

module.exports = router;
