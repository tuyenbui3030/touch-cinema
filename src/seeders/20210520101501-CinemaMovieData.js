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
    //       movieId: j,
    //       cinemaId: i,
    //       createdAt: date,
    //       updatedAt: date,
    //     });
    //   }
    // }
    const data = [
      {
        movieId: 1,
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
        movieId: 1,
        cinemaId: 3,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        cinemaId: 4,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        cinemaId: 5,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        cinemaId: 6,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        cinemaId: 7,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        cinemaId: 8,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        cinemaId: 9,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        cinemaId: 10,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        cinemaId: 11,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 1,
        cinemaId: 12,
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
        movieId: 2,
        cinemaId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        cinemaId: 3,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        cinemaId: 4,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        cinemaId: 5,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        cinemaId: 6,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        cinemaId: 7,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        cinemaId: 8,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        cinemaId: 9,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        cinemaId: 10,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        cinemaId: 11,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 2,
        cinemaId: 12,
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
        movieId: 3,
        cinemaId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        cinemaId: 3,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        cinemaId: 4,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        cinemaId: 5,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        cinemaId: 6,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        cinemaId: 7,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        cinemaId: 8,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        cinemaId: 9,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        cinemaId: 10,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        cinemaId: 11,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 3,
        cinemaId: 12,
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
        movieId: 4,
        cinemaId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 4,
        cinemaId: 3,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 4,
        cinemaId: 4,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 4,
        cinemaId: 5,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 4,
        cinemaId: 6,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 4,
        cinemaId: 7,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 4,
        cinemaId: 8,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 4,
        cinemaId: 9,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 4,
        cinemaId: 10,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 4,
        cinemaId: 11,
        createdAt: date,
        updatedAt: date,
      },
      {
        movieId: 4,
        cinemaId: 12,
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
