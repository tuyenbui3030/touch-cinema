"use strict";

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
        movieId: 1,
        roomId: 1,
        timeStart: "2021-05-24 10:35:32.774+00",
        timeEnd: "2021-05-24 12:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        roomId: 1,
        timeStart: "2021-05-25 10:35:32.774+00",
        timeEnd: "2021-05-25 12:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        roomId: 1,
        timeStart: "2021-05-26 10:35:32.774+00",
        timeEnd: "2021-05-26 12:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        roomId: 1,
        timeStart: "2021-05-27 10:35:32.774+00",
        timeEnd: "2021-05-27 12:35:32.774+00",
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        roomId: 2,
        timeStart: "2021-05-27 10:35:32.774+00",
        timeEnd: "2021-05-27 12:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        roomId: 3,
        timeStart: "2021-05-27 10:35:32.774+00",
        timeEnd: "2021-05-27 12:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        roomId: 4,
        timeStart: "2021-05-27 10:35:32.774+00",
        timeEnd: "2021-05-27 12:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        roomId: 5,
        timeStart: "2021-05-27 10:35:32.774+00",
        timeEnd: "2021-05-27 12:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        roomId: 1,
        timeStart: "2021-05-24 12:35:32.774+00",
        timeEnd: "2021-05-24 14:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        roomId: 1,
        timeStart: "2021-05-25 12:35:32.774+00",
        timeEnd: "2021-05-25 14:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        roomId: 1,
        timeStart: "2021-05-26 12:35:32.774+00",
        timeEnd: "2021-05-26 14:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        roomId: 1,
        timeStart: "2021-05-27 12:35:32.774+00",
        timeEnd: "2021-05-27 14:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        roomId: 2,
        timeStart: "2021-05-27 12:35:32.774+00",
        timeEnd: "2021-05-27 14:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        roomId: 3,
        timeStart: "2021-05-27 12:35:32.774+00",
        timeEnd: "2021-05-27 14:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        roomId: 4,
        timeStart: "2021-05-27 12:35:32.774+00",
        timeEnd: "2021-05-27 14:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        roomId: 5,
        timeStart: "2021-05-27 12:35:32.774+00",
        timeEnd: "2021-05-27 14:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        roomId: 1,
        timeStart: "2021-05-28 10:35:32.774+00",
        timeEnd: "2021-05-28 12:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        roomId: 6,
        timeStart: "2021-05-29 10:35:32.774+00",
        timeEnd: "2021-05-29 12:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 4,
        roomId: 4,
        timeStart: "2021-05-29 10:35:32.774+00",
        timeEnd: "2021-05-29 12:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        roomId: 1,
        timeStart: "2021-05-30 10:35:32.774+00",
        timeEnd: "2021-05-30 12:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        roomId: 2,
        timeStart: "2021-05-30 10:35:32.774+00",
        timeEnd: "2021-05-30 12:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        roomId: 3,
        timeStart: "2021-05-31 10:35:32.774+00",
        timeEnd: "2021-05-31 12:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        roomId: 4,
        timeStart: "2021-05-31 10:35:32.774+00",
        timeEnd: "2021-05-31 12:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        roomId: 5,
        timeStart: "2021-05-31 10:35:32.774+00",
        timeEnd: "2021-05-31 12:35:32.774+00",
        price: 49000,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        roomId: 1,
        timeStart: "2021-05-27 20:00:32.774+00",
        timeEnd: "2021-05-27 20:00:32.774+00",
        price: 49000,
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
