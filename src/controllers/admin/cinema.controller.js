const {
  Cinema,
  CinemaPhoto,
  Room,
  Typeroom,
  Showtime,
  Movie,
} = require("../../models");
const { Sequelize, Op } = require("sequelize");
const { sequelize } = require("../../models");
const nonAccentVietnamese = require("../../utils/nonAccentVietnamese");
const multer = require("multer");
const moment = require("moment");
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
        cb(null, "src/public/images/content");
      },
    });
    const upload = multer({ storage });
    upload.array("images", 20)(req, res, async function (err) {
      if (err) {
        res.send(err);
      } else {
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
        res.redirect(req.originalUrl);
      }
    });
  },
  destroy: async (req, res) => {
    const result = await Cinema.destroy({
      where: {
        id: req.body.cinemaId,
      },
    });
    res.json(result);
  },

  detail: async (req, res) => {
    const unsignedName = req.params.unsignedname;
    const cinema = await Cinema.findOne({
      where: {
        unsignedName,
      },
      include: [
        {
          model: Room,
          include: [
            {
              model: Typeroom,
            },
          ],
          required: false,
        },
        {
          model: CinemaPhoto,
          required: false,
        },
        {
          model: Movie,
          required: false,
        },
      ],
    });
    const typeRoom = await Typeroom.findAll();
    const showtimes = await Showtime.findAll({
      include: [
        {
          model: Room,
          include: [
            {
              model: Cinema,
              where: {
                unsignedName,
              },
            },
          ],
          required: true,
        },
        { model: Movie },
      ],
    });
    const movies = await Movie.findAll({
      include: [
        {
          model: Cinema,
          where: {
            unsignedName,
          },
        },
      ],
    });
    const redirectUrl = req.originalUrl;
    res.render("admin/cinema/detail", {
      moment,
      cinema,
      typeRoom,
      showtimes,
      movies,
      redirectUrl,
      layout: "admin/layouts/layout.ejs",
    });
  },
  newRoom: async (req, res) => {
    const { cinemaId, name, typeRoomId, row, col, redirectUrl } = req.body;
    const result = await Room.create({
      name,
      cinemaId,
      typeRoomId,
      row,
      col,
    });
    // res.redirect(req.originalUrl);
    res.redirect(redirectUrl);
  },
  findShowtime: async (req, res) => {
    const freeShow = [
      {
        key: 1,
        timeStart: "07:00 AM",
        status: true,
      },
      {
        key: 2,
        timeStart: "09:00 AM",
        status: true,
      },
      {
        key: 3,
        timeStart: "11:00 AM",
        status: true,
      },
      {
        key: 4,
        timeStart: "01:00 PM",
        status: true,
      },
      {
        key: 5,
        timeStart: "03:00 PM",
        status: true,
      },
      {
        key: 6,
        timeStart: "05:00 PM",
        status: true,
      },
      {
        key: 7,
        timeStart: "07:00 PM",
        status: true,
      },
      {
        key: 8,
        timeStart: "09:00 PM",
        status: true,
      },
    ];

    const { roomId, movieId, date } = req.body;

    let freeSlot = JSON.parse(
      JSON.stringify(
        await Showtime.findAll({
          attributes: ["slot"],
          where: {
            [Op.and]: [
              Sequelize.where(
                Sequelize.fn("date", Sequelize.col("timeStart")),
                date
              ),
              { roomId },
            ],
          },
        })
      )
    );
    //chuyển về mảng
    freeSlot = freeSlot.map((e) => e.slot);
    //check trạng thái ghế trống
    freeShow.forEach((element) => {
      const status = !freeSlot.includes(element.key);
      element.status = status;
    });
    res.render("admin/cinema/freeTime", {
      freeShow,
      layout: false,
    });
  },
  newShowtime: async (req, res) => {
    const freeShow = [
      {
        key: "1",
        timeStart: "07:00:00+07",
        timeEnd: "09:00:00+07",
        status: true,
      },
      {
        key: "2",
        timeStart: "09:00:00+07",
        timeEnd: "11:00:00+07",
        status: true,
      },
      {
        key: "3",
        timeStart: "11:00:00+07",
        timeEnd: "13:00:00+07",
        status: true,
      },
      {
        key: "4",
        timeStart: "13:00:00+07",
        timeEnd: "15:00:00+07",
        status: true,
      },
      {
        key: "5",
        timeStart: "15:00:00+07",
        timeEnd: "17:00:00+07",
        status: true,
      },
      {
        key: "6",
        timeStart: "17:00:00+07",
        timeEnd: "19:00:00+07",
        status: true,
      },
      {
        key: "7",
        timeStart: "19:00:00+07",
        timeEnd: "21:00:00+07",
        status: true,
      },
      {
        key: "8",
        timeStart: "21:00:00+07",
        timeEnd: "23:00:00+07",
        status: true,
      },
    ];
    const actionNewShowtime = [];
    const { movieId, roomId, date, slot, price, redirectUrl } = req.body;
    freeShow.forEach((element) => {
      if (slot.includes(element.key)) {
        actionNewShowtime.push(
          Showtime.create({
            movieId,
            roomId,
            timeStart: date + " " + element.timeStart,
            timeEnd: date + " " + element.timeEnd,
            slot: element.key,
            price,
          })
        );
      }
    });
    const resultNewShowtime = await Promise.all(actionNewShowtime);
    res.redirect(redirectUrl);
  },
  destroyroom: async (req, res) => {
    const result = await Room.destroy({
      where: {
        id: req.body.roomId,
      },
    });
    res.json(result);
  },
  destroyshowtime: async (req, res) => {
    const result = await Showtime.destroy({
      where: {
        uuid: req.body.showtimeId,
      },
    });
    res.json(result);
  },
};
