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
  static checkUserExistence = async (userName) => {
    const result = await models.Users.findOne({
      where: { username: userName },
    });
    return result;
  };
}
module.exports = Validation;
