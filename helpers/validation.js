const fastestValidator = require("fastest-validator");
const models = require("../models");
class Validation {
  static validateUser = (userObject) => {
    const userObjectSchema = {
      username: { type: "string", optional: false },
      password: { type: "string", optional: false },
    };
    const validator = new fastestValidator();
    const validationResponse = validator.validate(userObject, userObjectSchema);
    return validationResponse == true ? true : validationResponse;
  };
  static validateProfile = (profileObject) => {
    const profileObjectSchema = {
      phoneNum: { type: "string", optional: false },
      location: { type: "string", optional: true },
      isVerified: { type: "boolean", optional: false },
      userId: { type: "number", optional: false },
    };
    const validator = new fastestValidator();
    const validationResponse = validator.validate(
      profileObject,
      profileObjectSchema
    );
    return validationResponse == true ? true : validationResponse;
  };
  static validateCurrency = (currencyObject) => {
    const currencyObjectSchema = {
      currencyName: { type: "string", optional: false },
    };
    const validator = new fastestValidator();
    const validationResponse = validator.validate(
      currencyObject,
      currencyObjectSchema
    );
    return validationResponse == true ? true : validationResponse;
  };
  static validateTransaction = (transactionObject) => {
    const transactionObjectSchema = {
      transactionType: { type: "string", optional: false },
      source: { type: "number", optional: false },
      destination: { type: "number", optional: false },
      buyingCurrency: { type: "string", optional: true },
      sellingCurrency: { type: "string", optional: false },
      buyingAmount: { type: "number", optional: true },
      sellingAmount: { type: "number", optional: true },
      dueDate: { type: "string", optional: true },
      transactionStatus: { type: "string", optional: false },
      userId: { type: "number", optional: false },
    };
    const validator = new fastestValidator();
    const validationResponse = validator.validate(
      transactionObject,
      transactionObjectSchema
    );
    return validationResponse == true ? true : validationResponse;
  };
  static validateCustomer = (customerObject) => {
    const customerObjectSchema = {
      fullName: { type: "string", optional: false },
      phoneNum: { type: "string", optional: false },
      userId: { type: "number", optional: false },
    };
    const validator = new fastestValidator();
    const validationResponse = validator.validate(
      customerObject,
      customerObjectSchema
    );
    return validationResponse == true ? true : validationResponse;
  };
  static validateOfficeAccounts = (officeAccountsObject) => {
    const officeAccountsObjectSchema = {
      currencyId: { type: "number", optional: false },
      currentAmount: { type: "number", optional: false },
      officeFee: { type: "number", optional: false },
      userId: { type: "number", optional: false },
    };
    const validator = new fastestValidator();
    const validationResponse = validator.validate(
      officeAccountsObject,
      officeAccountsObjectSchema
    );
    return validationResponse == true ? true : validationResponse;
  };
  static validateCustomerAccounts = (customerAccountObject) => {
    const customerAccountObjectSchema = {
      officeAccountId: { type: "number", optional: false },
      customerId: { type: "number", optional: false },
      userId: { type: "number", optional: false },
    };
    const validator = new fastestValidator();
    const validationResponse = validator.validate(
      customerAccountObject,
      customerAccountObjectSchema
    );
    return validationResponse == true ? true : validationResponse;
  };
  static validateReminder = (reminderObject) => {
    const reminderObjectSchema = {
      reminderTitle: { type: "string", optional: false },
      memo: { type: "string", optional: false },
      date: { type: "string", optional: false },
      isRange: { type: "boolean", optional: false },
      userId: { type: "number", optional: false },
    };
    const validator = new fastestValidator();
    const validationResponse = validator.validate(
      reminderObject,
      reminderObjectSchema
    );
    return validationResponse == true ? true : validationResponse;
  };

  static checkUserExistence = async (userName) => {
    const result = await models.Users.findOne({
      where: { username: userName },
    });
    return result;
  };
}
module.exports = Validation;
