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
        type: "2D",
        createdAt: date,
        updatedAt: date,
      },
      {
        type: "3D",
        createdAt: date,
        updatedAt: date,
      },
      {
        type: "4DX",
        createdAt: date,
        updatedAt: date,
      },
    ];
    await queryInterface.bulkInsert("Typerooms", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Typerooms", null, {});
  },
};
