const models = require("../models");
const validation = require("../helpers/validation");
class CurrencyController {
  static createCurrency = (req, res) => {
    const vR = validation.validateCurrency(req.body);
    if (vR == true) {
      models.Currencies.create(req.body)
        .then((result) => {
          res.status(201).send("Currency Created Successfully");
        })
        .catch((err) => {
          res.status(500).send("Internal Server Error");
        });
    } else {
      res.status(400).json(vR);
    }
  };
}
module.exports = CurrencyController;
