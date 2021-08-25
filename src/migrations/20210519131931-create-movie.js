"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Movies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      unsignedName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      openingDay: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      poster: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      trailer: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      time: {
        type: Sequelize.INTEGER,
      },
      sold: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Movies");
  },
};
