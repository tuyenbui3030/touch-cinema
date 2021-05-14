const express = require("express");
const signinController = require("../controllers/signin.controller");
const router = express.Router();

router.get("/auth/facebook", signinController.authenticate);
router.get("/auth/facebook/secrets", signinController.authenticateRedirect);

router.get("/", signinController.index);

module.exports = router;
