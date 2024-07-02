const models = require("../models");
const validation = require("../helpers/validation");
class TransactionsController {
  static createTransaction = (req, res) => {
    const vR = validation.validateTransaction(req.body);
    if (vR == true) {
      models.Transactions.create(req.body)
        .then((result) => {
          res.status(201).send("Transaction Created Successfully");
        })
        .catch((err) => {
          res.status(500).send("Internal Server Error");
        });
    } else {
      res.status(400).json(vR);
    }
  };
}
module.exports = TransactionsController;
