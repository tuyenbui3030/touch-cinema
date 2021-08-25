const express = require("express");
const detailController = require("../controllers/detail.controller");
const router = express.Router();

router.get("/:unsignedName", detailController.index);

module.exports = router;
