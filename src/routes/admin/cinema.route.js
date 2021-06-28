const express = require("express");

const restrict = require("../../middlewares/authAdmin.middleware");

const cinemaController = require("../../controllers/admin/cinema.controller");
const router = express.Router();

const savePhoto = require("../../middlewares/savePhoto.middleware");
router.get("/", cinemaController.index);
router.post("/", cinemaController.newCinema);
router.post("/destroy", cinemaController.destroy);
router.post("/findshowtime", cinemaController.findShowtime);
router.get("/:unsignedname", cinemaController.detail);
router.post("/:unsignedname", cinemaController.newRoom);

// router.post("/new-cinema", function (req, res) {
//   const storage = multer.diskStorage({
//     filename(req, file, cb) {
//       cb(null, "trash.jpg");
//     },
//     destination(req, file, cb) {
//       cb(null, "src/public/images/content/test");
//     },
//   });
//   console.log(storage);
//   const upload = multer({ storage });
//   upload.array("images", 10)(req, res, function (err) {
//     if (!err) {
//       res.send("Thành công");
//     } else {
//       res.send(err);
//     }
//   });
// });

module.exports = router;
