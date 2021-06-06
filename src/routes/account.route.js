const express = require("express");
const accountController = require("../controllers/account.controller");
const router = express.Router();

router.get("/profile", accountController.profile);

router.get("/edit", accountController.edit);
router.post("/edit", accountController.submitEdit);

router.get("/change-password", accountController.changePassword);
router.post("/change-password", accountController.submitChangePassword);

module.exports = router;
