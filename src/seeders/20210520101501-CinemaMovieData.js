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
    // for (var i = 1; i < 3; i++) {
    //   for (var j = 1; j < 10; j++) {
    //     data.push({
    //       cinemaId: j,
    //       movieId: i,
    //       createdAt: date,
    //       updatedAt: date,
    //     });
    //   }
    // }
    const data = [
      {
        cinemaId: 1,
        movieId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 1,
        movieId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 1,
        movieId: 3,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 1,
        movieId: 4,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 1,
        movieId: 5,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 1,
        movieId: 6,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 1,
        movieId: 7,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 1,
        movieId: 8,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 1,
        movieId: 9,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 1,
        movieId: 10,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 1,
        movieId: 11,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 1,
        movieId: 12,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 2,
        movieId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 2,
        movieId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 2,
        movieId: 3,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 2,
        movieId: 4,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 2,
        movieId: 5,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 2,
        movieId: 6,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 2,
        movieId: 7,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 2,
        movieId: 8,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 2,
        movieId: 9,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 2,
        movieId: 10,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 2,
        movieId: 11,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 2,
        movieId: 12,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 3,
        movieId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 3,
        movieId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 3,
        movieId: 3,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 3,
        movieId: 4,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 3,
        movieId: 5,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 3,
        movieId: 6,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 3,
        movieId: 7,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 3,
        movieId: 8,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 3,
        movieId: 9,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 3,
        movieId: 10,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 3,
        movieId: 11,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 3,
        movieId: 12,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 4,
        movieId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 4,
        movieId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 4,
        movieId: 3,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 4,
        movieId: 4,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 4,
        movieId: 5,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 4,
        movieId: 6,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 4,
        movieId: 7,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 4,
        movieId: 8,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 4,
        movieId: 9,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 4,
        movieId: 10,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 4,
        movieId: 11,
        createdAt: date,
        updatedAt: date,
      },
      {
        cinemaId: 4,
        movieId: 12,
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
    await queryInterface.bulkDelete("CinemaMovies", null, {});
  },
};
