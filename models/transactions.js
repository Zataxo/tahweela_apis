"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transactions.hasOne(models.HandleRequest);
    }
  }
  Transactions.init(
    {
      transactionType: DataTypes.ENUM(
        "BUY",
        "SELL",
        "HANDLE",
        "DEPOSIT",
        "WITHDRAW"
      ),
      source: DataTypes.INTEGER,
      destination: DataTypes.INTEGER,
      buyingCurrency: DataTypes.STRING,
      sellingCurrency: DataTypes.STRING,
      buyingAmount: DataTypes.FLOAT,
      sellingAmount: DataTypes.FLOAT,
      dueDate: DataTypes.DATE,
      transactionStatus: DataTypes.ENUM(
        "PENDING",
        "PROCESSING",
        "REJECTED",
        "DONE"
      ),
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Transactions",
    }
  );
  return Transactions;
};
