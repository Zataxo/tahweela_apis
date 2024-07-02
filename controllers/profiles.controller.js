const models = require("../models");
const validation = require("../helpers/validation");
class ProfilesController {
  static createProfile = (req, res) => {
    const vR = validation.validateProfile(req.body);
    if (vR == true) {
      models.Profile.create(req.body)
        .then((result) => {
          res.status(201).send("Profile Created Successfully");
        })
        .catch((err) => {
          res.status(500).send("Internal Server Error");
        });
    } else {
      res.status(400).json(vR);
    }
  };
  static getUserProfile = (req, res) => {
    if (!req.params.userId) {
      return res.status(400).send("User ID can not be empty");
    }
    models.Profile.findOne({ where: { userId: req.params.userId } })
      .then((profile) => {
        res.status(200).json(profile);
      })
      .catch((err) => {
        res.status(500).send("Internal Server Error");
      });
  };
}
module.exports = ProfilesController;
