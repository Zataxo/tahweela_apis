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
      OfficeAccounts.hasOne(models.Currencies);
      OfficeAccounts.belongsToMany(models.Customers, {
        through: "CustomersAccounts",
      });
    }
  }
  OfficeAccounts.init(
    {
      currencyId: DataTypes.INTEGER,
      currentAmount: DataTypes.FLOAT,
      officeFee: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "OfficeAccounts",
    }
  );
  return OfficeAccounts;
};
