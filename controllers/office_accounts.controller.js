const models = require("../models");
const validation = require("../helpers/validation");
class OfficeAccountsController {
  static createOfficeAccounts = (req, res) => {
    console.log("HI");
    const vR = validation.validateOfficeAccounts(req.body);
    if (vR == true) {
      models.OfficeAccounts.create(req.body)
        .then((result) => {
          res.status(201).send("OfficeAccount Created Successfully");
        })
        .catch((err) => {
          res.status(500).send("Internal Server Error");
        });
    } else {
      res.status(400).json(vR);
    }
  };
  static getOfficeAccounts = (req, res) => {
    if (!req.params.userId) {
      return res.status(400).send("User can not be empty");
    }
    models.OfficeAccounts.findAll({
      where: { userId: req.params.userId },
      include: [
        // models.Currencies,
        models.Customers,
      ],
    }).then((result) => {
      if (result.length === 0) {
        res.status(404).json(result);
      } else {
        res.status(200).json(result);
      }
    });
  };
  static createCustomerAccount = (req, res) => {
    const vR = validation.validateCustomerAccounts(req.body);
    if (vR == true) {
      const customerAccount = {
        officeAccountId: req.body.officeAccountId,
        customerId: req.body.customerId,
        userId: req.body.userId,
        // OfficeAccountId: req.body.officeAccountId,
        // CustomerId: req.body.customerId,
      };
      models.CustomerAccounts.create(customerAccount)
        .then((result) => {
          res.status(201).send("CustomerAccounts Created Successfully");
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send("Internal Server Error");
        });
    } else {
      res.status(400).json(vR);
    }
  };
}
module.exports = OfficeAccountsController;
