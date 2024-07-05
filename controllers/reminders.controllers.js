const models = require("../models");
const validation = require("../helpers/validation");
class RemindersController {
  static createReminder = (req, res) => {
    const vR = validation.validateReminder(req.body);
    if (vR == true) {
      models.Reminders.create(req.body)
        .then((result) => {
          res.status(201).send("Reminder Created Successfully");
        })
        .catch((err) => {
          res.status(500).send("Internal Server Error");
        });
    } else {
      res.status(400).json(vR);
    }
  };
  static getUserReminders = (req, res) => {
    if (!req.params.userId) {
      return res.status(400).send("User can not be empty");
    }
    models.Reminders.findAll({
      where: { userId: req.params.userId },
    }).then((result) => {
      if (result.length === 0) {
        res.status(404).json(result);
      } else {
        res.status(200).json(result);
      }
    });
  };
}
module.exports = RemindersController;
