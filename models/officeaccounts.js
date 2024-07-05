"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OfficeAccounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OfficeAccounts.hasOne(models.Currencies, {
        foreignKey: "id",
      });
      OfficeAccounts.belongsToMany(models.Customers, {
        through: "CustomerAccounts",
        foreignKey: "officeAccountId",
        otherKey: "customerId",
      });
    }
  }
  OfficeAccounts.init(
    {
      currencyId: DataTypes.INTEGER,
      currentAmount: DataTypes.INTEGER,
      officeFee: DataTypes.FLOAT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OfficeAccounts",
    }
  );
  return OfficeAccounts;
};
