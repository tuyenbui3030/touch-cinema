const express = require("express");
const accountController = require("../controllers/account.controller");
const router = express.Router();

router.get("/profile", accountController.profile);
router.get("/edit", accountController.edit);
router.post("/edit", accountController.submitEdit);

module.exports = router;
