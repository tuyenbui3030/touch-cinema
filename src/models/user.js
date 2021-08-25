"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Booking, {
        foreignKey: "userId",
        onDelete: "cascade",
      });

      this.hasMany(models.Cart, {
        foreignKey: "userId",
        onDelete: "cascade",
      });
    }
  }
  User.init(
    {
      facebookId: {
        unique: true,
        type: DataTypes.STRING,
      },
      googleId: {
        unique: true,
        type: DataTypes.STRING,
      },
      fullname: {
        allowNull: false,
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        //unique: true,
        unique: {
          msg: "Số điện thoại này đã tồn tại trong hệ thống!",
          fields: ["email"],
        },
      },
      email: {
        type: DataTypes.STRING,
        // unique: true,
        unique: {
          msg: "Email này đã tồn tại trong hệ thống!",
          fields: ["email"],
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      token: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
