const express = require("express");

const signinController = require("../controllers/signin.controller");

const router = express.Router();

router.get("/auth/facebook", signinController.authenticate);
router.get("/auth/facebook/secrets", signinController.authenticateRedirect);

router.get("/auth/google", signinController.authenticateGoogle);
router.get("/auth/google/secrets", signinController.authenticateGoogleRedirect);

router.get("/", signinController.index);

router.post("/", signinController.submitSignin);

module.exports = router;
