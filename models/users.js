"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.HandleRequest);
      Users.hasOne(models.Profile);
      Users.hasMany(models.Reminders);
    }
  }
  Users.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      type: DataTypes.ENUM("INDIVIDUAL", "OFFICE"),
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
