"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const date = new Date();
    const data = [
      {
        uuid: "9b52a2c6-4558-46de-ae71-485d8b17949a",
        movieId: 1,
        roomId: 1,
        slot: 1,
        timeStart: "2021-08-24 07:00:00.000+07",
        timeEnd: "2021-08-24 09:00:00.000+07",
        price: 5,
        createdAt: date,
        updatedAt: date,
      },
      {
        uuid: uuidv4(),
        movieId: 1,
        roomId: 1,
        slot: 2,
        timeStart: "2021-08-24 09:00:00.000+07",
        timeEnd: "2021-08-24 11:00:00.000+07",
        price: 5,
        createdAt: date,
        updatedAt: date,
      },
      {
        uuid: uuidv4(),
        movieId: 1,
        roomId: 1,
        slot: 3,
        timeStart: "2021-08-24 11:00:00.000+07",
        timeEnd: "2021-08-24 13:00:00.000+07",
        price: 5,
        createdAt: date,
        updatedAt: date,
      },
    ];
    await queryInterface.bulkInsert("Showtimes", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Showtimes", null, {});
  },
};
