'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HandleRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HandleRequest.init({
    fullName: DataTypes.STRING,
    idNo: DataTypes.INTEGER,
    phoneNum: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HandleRequest',
  });
  return HandleRequest;
};