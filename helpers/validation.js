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

  static checkUserExistence = async (userName) => {
    const result = await models.Users.findOne({
      where: { username: userName },
    });
    return result;
  };
}
module.exports = Validation;
