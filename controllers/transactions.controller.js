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
  static getUserTransactions = (req, res) => {
    if (!req.params.userId) {
      return res.status(400).send("No User identified");
    }
    models.Transactions.findAll({ where: { userId: req.params.userId } }).then(
      (usersTransactions) => {
        if (usersTransactions.length === 0) {
          return res.status(404).json(usersTransactions);
        }
        res.status(200).json(usersTransactions);
      }
    );
  };
}
module.exports = TransactionsController;
