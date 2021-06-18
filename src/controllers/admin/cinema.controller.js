const { Cinema, Movie, Room } = require("../../models");
const { Sequelize } = require("sequelize");
const { sequelize } = require("../../models");
const multer = require("multer");

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
  newCinema: async (req, res) => {
    const storage = multer.diskStorage({
      filename(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
      },
      destination(req, file, cb) {
        // cb(null, "../../public/images/content");
        cb(null, "src/public/images/content/test");
      },
    });
    console.log(storage);
    const upload = multer({ storage });
    upload.array("images", 10)(req, res, function (err) {
      if (!err) {
        res.send("Thành công");
      } else {
        res.send(err);
      }
    });
  },
};
