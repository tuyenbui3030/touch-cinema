"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    const data = [
      {
        name: "Touch Aeon",
        address: "Số 1 Đường Số 17A, Bình Trị Đông B, Bình Tân, Hồ Chí Minh",
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "Touch Nowzone",
        address: "235 Nguyễn Văn Cừ, Quận 1, Hồ Chí Minh",
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "Touch Centre",
        address: "65 Lê Lợi, P. Bến Nghé, Quận 1, TP. HCM",
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "Touch Vincom",
        address: "72 Lê Thánh Tôn, Bến Nghé, Quận 1, TP.HCM",
        createdAt: date,
        updatedAt: date,
      },
    ];
    await queryInterface.bulkInsert("Cinemas", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Cinemas", null, {});
  },
};
