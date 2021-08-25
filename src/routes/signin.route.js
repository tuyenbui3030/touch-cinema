const express = require("express");

const restrict = require("../middlewares/notAuth");

const signinController = require("../controllers/signin.controller");

const router = express.Router();

router.get("/", restrict, signinController.index);

router.post("/", restrict, signinController.singinLocal);

router.get("/forgot", restrict, signinController.forgotIndex);
router.post("/forgot", restrict, signinController.forgotSubmit);
router.get("/change", restrict, signinController.changeIndex);
router.post("/change", restrict, signinController.changeSubmit);

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
