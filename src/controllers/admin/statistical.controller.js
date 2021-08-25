const { Room, Showtime, Ticket, Booking } = require("../../models");
const { Sequelize, Op } = require("sequelize");
const moment = require("moment");
module.exports = {
  movie: async (req, res) => {
    let { timeFrom, timeTo, movieId } = req.body;
    timeFrom += " 00:00:00.000+07";
    timeTo += " 23:59:59.000+07";
    const movie = JSON.parse(
      JSON.stringify(
        await Ticket.findAll({
          attributes: [
            [Sequelize.fn("SUM", Sequelize.col("Ticket.price")), "total"],
            [Sequelize.fn("COUNT", Sequelize.col("Ticket.id")), "count"],
            [
              Sequelize.fn(
                "date_trunc",
                "day",
                Sequelize.col("Ticket.createdAt")
              ),
              "Date",
            ],
          ],
          where: {
            createdAt: {
              // [Op.between]: ["2021-07-01", "2021-07-03"],
              [Op.between]: [timeFrom, timeTo],
            },
          },
          include: [
            {
              model: Booking,
              attributes: [],
              include: [
                {
                  model: Showtime,
                  attributes: [],
                  where: {
                    movieId: movieId,
                  },
                },
              ],
              required: true,
            },
          ],
          order: [[Sequelize.literal('"Date"'), "ASC"]],
          group: "Date",
        })
      )
    );

    // let total = movie.map((e) => e.total);
    // let count = movie.map((e) => e.count);
    // let date = movie.map((e) => e.Date);
    // const reducer = (accumulator, currentValue) =>
    //   parseInt(accumulator) + parseInt(currentValue);
    // let labelTotal = 0;
    // let labelCount = 0;
    // if (total.length > 0 && count.length > 0) {
    //   labelTotal = total.reduce(reducer);
    //   labelCount = count.reduce(reducer);
    // }
    // const data = { total, count, date, labelTotal, labelCount };

    const formatDay = (datetime) => {
      const dateObj = new Date(datetime);
      const month = dateObj.getUTCMonth() + 1;
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();
      return year + "-" + month + "-" + day;
    };

    const getDates = (from, to) => {
      const cFrom = new Date(from);
      const cTo = new Date(to);

      let daysArr = [];
      let tempDate = cFrom;

      while (tempDate < cTo) {
        tempDate.setUTCDate(tempDate.getUTCDate() + 1);
        let date = new Date(tempDate);

        const result = movie.find(({ Date }) => {
          return formatDay(Date) === formatDay(date);
        });
        if (result) {
          daysArr.push({
            total: result.total,
            count: result.count,
            Date: formatDay(result.Date),
          });
        } else {
          daysArr.push({ total: 0, count: 0, Date: formatDay(date) });
        }
      }
      return daysArr;
    };
    const listData = getDates(timeFrom, timeTo);

    console.log(listData);
    let total = listData.map((e) => e.total);
    let count = listData.map((e) => e.count);
    let date = listData.map((e) => e.Date);
    const reducer = (accumulator, currentValue) =>
      parseInt(accumulator) + parseInt(currentValue);
    let labelTotal = 0;
    let labelCount = 0;
    if (total.length > 0 && count.length > 0) {
      labelTotal = total.reduce(reducer);
      labelCount = count.reduce(reducer);
    }
    const data = { total, count, date, labelTotal, labelCount };
    res.json(data);
  },
  cinema: async (req, res) => {
    let { timeFrom, timeTo, cinemaId } = req.body;
    timeFrom += " 00:00:00.000+07";
    timeTo += " 23:59:59.000+07";
    const cinema = JSON.parse(
      JSON.stringify(
        await Ticket.findAll({
          attributes: [
            [Sequelize.fn("SUM", Sequelize.col("Ticket.price")), "total"],
            [Sequelize.fn("COUNT", Sequelize.col("Ticket.id")), "count"],
            [
              Sequelize.fn(
                "date_trunc",
                "day",
                Sequelize.col("Ticket.createdAt")
              ),
              "Date",
            ],
          ],
          where: {
            createdAt: {
              // [Op.between]: ["2021-07-01", "2021-07-03"],
              [Op.between]: [timeFrom, timeTo],
            },
          },
          include: [
            {
              model: Booking,
              attributes: [],
              include: [
                {
                  model: Showtime,
                  attributes: [],
                  include: [
                    {
                      model: Room,
                      attributes: [],
                      where: {
                        cinemaId: cinemaId,
                      },
                    },
                  ],
                  required: true,
                },
              ],
              required: true,
            },
          ],
          order: [[Sequelize.literal('"Date"'), "ASC"]],
          group: "Date",
        })
      )
    );

    // let total = movie.map((e) => e.total);
    // let count = movie.map((e) => e.count);
    // let date = movie.map((e) => e.Date);
    // const reducer = (accumulator, currentValue) =>
    //   parseInt(accumulator) + parseInt(currentValue);
    // let labelTotal = 0;
    // let labelCount = 0;
    // if (total.length > 0 && count.length > 0) {
    //   labelTotal = total.reduce(reducer);
    //   labelCount = count.reduce(reducer);
    // }
    // const data = { total, count, date, labelTotal, labelCount };

    const formatDay = (datetime) => {
      const dateObj = new Date(datetime);
      const month = dateObj.getUTCMonth() + 1;
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();
      return year + "-" + month + "-" + day;
    };

    const getDates = (from, to) => {
      const cFrom = new Date(from);
      const cTo = new Date(to);

      let daysArr = [];
      let tempDate = cFrom;

      while (tempDate < cTo) {
        tempDate.setUTCDate(tempDate.getUTCDate() + 1);
        let date = new Date(tempDate);

        const result = cinema.find(({ Date }) => {
          return formatDay(Date) === formatDay(date);
        });
        if (result) {
          daysArr.push({
            total: result.total,
            count: result.count,
            Date: formatDay(result.Date),
          });
        } else {
          daysArr.push({ total: 0, count: 0, Date: formatDay(date) });
        }
      }
      return daysArr;
    };
    const listData = getDates(timeFrom, timeTo);

    console.log(listData);
    let total = listData.map((e) => e.total);
    let count = listData.map((e) => e.count);
    let date = listData.map((e) => e.Date);
    const reducer = (accumulator, currentValue) =>
      parseInt(accumulator) + parseInt(currentValue);
    let labelTotal = 0;
    let labelCount = 0;
    if (total.length > 0 && count.length > 0) {
      labelTotal = total.reduce(reducer);
      labelCount = count.reduce(reducer);
    }
    const data = { total, count, date, labelTotal, labelCount };
    res.json(data);
  },
};
