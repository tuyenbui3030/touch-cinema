const { Cinema, CinemaPhoto } = require("../../models");
const { Sequelize } = require("sequelize");
const { sequelize } = require("../../models");
const nonAccentVietnamese = require("../../utils/nonAccentVietnamese");
const multer = require("multer");
const e = require("connect-flash");

module.exports = {
  index: async (req, res) => {
    // const cinemas = await Cinema.findAll({
    //   attributes: {
    //     include: [
    //       [Sequelize.fn("COUNT", Sequelize.col("Rooms.id")), "countRoom"],
    //     ],
    //   },
    //   include: [
    //     {
    //       model: Room,
    //       attributes: [],
    //     },
    //   ],
    //   group: ["Cinema.id"],
    // });
    const list = await Cinema.findAll({
      attributes: {
        include: [
          [
            sequelize.literal(
              `(SELECT COUNT(*) FROM "Rooms" WHERE "Rooms"."cinemaId" = "Cinema"."id")`
            ),
            "totalRoom",
          ],
          [
            sequelize.literal(
              `(SELECT COUNT(*)
              FROM "Movies" JOIN "CinemaMovies" ON "CinemaMovies"."movieId" = "Movies"."id" JOIN "Cinemas" ON "Cinemas"."id" = "CinemaMovies"."cinemaId"
              WHERE "CinemaMovies"."cinemaId" = "Cinema"."id")`
            ),
            "totalMovie",
          ],
        ],
      },
    });
    const cinemas = JSON.parse(JSON.stringify(list));
    res.render("admin/cinema/index", {
      layout: "admin/layouts/layout.ejs",
      cinemas,
    });
  },
  submit: async (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
  },
  newCinema: async (req, res) => {
    let imageList = [];
    const storage = multer.diskStorage({
      filename(req, file, cb) {
        let nameImage = Date.now() + "-" + file.originalname;
        imageList.push({ key: file.originalname, value: nameImage });
        cb(null, nameImage);
      },
      destination(req, file, cb) {
        // cb(null, "../../public/images/content");
        cb(null, "src/public/images/content/test");
      },
    });
    const upload = multer({ storage });
    upload.array("images", 20)(req, res, async function (err) {
      if (!err) {
        res.send(err);
      }
      const { name, address, saveImg } = req.body;
      const filterImage = [];
      imageList.forEach((e) => {
        if (saveImg.includes(e.key)) {
          filterImage.push(e.value);
        }
      });
      const newCinema = await Cinema.create({
        unsignedName: nonAccentVietnamese(name),
        name,
        address,
      });
      filterImage.forEach(async (element) => {
        await CinemaPhoto.create({
          name: element,
          cinemaId: newCinema.id,
        });
      });
    });
    res.redirect(req.originalUrl);
  },
};
