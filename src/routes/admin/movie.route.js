const express = require("express");

const movieController = require("../../controllers/admin/movie.controller");
const path = require("path");
const router = express.Router();
const multer = require("multer");

const upload = multer({
  dest: path.join("src", "uploads"),
});

router.get("/", movieController.index);
// router.post("/new-movie", movieController.newMovie);
router.post(
  "/new-movie",
  upload.fields([
    {
      name: "poster",
      maxCount: 1,
    },
    {
      name: "images",
    },
  ]),
  movieController.newMovie
);
router.delete("/destroy", movieController.destroy);
module.exports = router;
