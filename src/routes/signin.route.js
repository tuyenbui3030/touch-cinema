const express = require("express");

const restrict = require("../middlewares/notAuth");

const signinController = require("../controllers/signin.controller");

const router = express.Router();

router.get("/", restrict, signinController.index);

router.post("/", restrict, signinController.singinLocal);

router.get("/auth/facebook", restrict, signinController.authenticate);
router.get(
  "/auth/facebook/secrets",
  restrict,
  signinController.authenticateRedirect
);

router.get("/auth/google", restrict, signinController.authenticateGoogle);
router.get(
  "/auth/google/secrets",
  restrict,
  signinController.authenticateGoogleRedirect
);

module.exports = router;
