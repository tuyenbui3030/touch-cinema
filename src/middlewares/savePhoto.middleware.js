const multer = require("multer");
const { User } = require("../models");

module.exports = async (req, res, next) => {
  const storage = multer.diskStorage({
    filename(req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
    destination(req, file, cb) {
      cb(null, "src/public/images/content/test");
    },
  });
  console.log(storage);
  const upload = multer({ storage });
  upload.array("images", 10)(req, res, function (err) {
    if (err) {
      res.send(err);
    }
  });
  const user = await User.findByPk(1);
  await user.save();
  next();
};
