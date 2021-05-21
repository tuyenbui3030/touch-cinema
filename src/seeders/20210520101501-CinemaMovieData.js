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
        cinemaId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        cinemaId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        cinemaId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 4,
        cinemaId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 5,
        cinemaId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        cinemaId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        cinemaId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        cinemaId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 5,
        cinemaId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 8,
        cinemaId: 3,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 9,
        cinemaId: 3,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        cinemaId: 3,
        createdAt: date,
        updatedAt: date,
      },
    ];
    await queryInterface.bulkInsert("CinemaMovies", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
