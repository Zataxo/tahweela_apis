const models = require("../models");
const validation = require("../helpers/validation");
class CustomerController {
  static createCustomer = (req, res) => {
    const vR = validation.validateCustomer(req.body);
    if (vR == true) {
      models.Customers.create(req.body)
        .then((result) => {
          res.status(201).send("Customer Created Successfully");
        })
        .catch((err) => {
          res.status(500).send("Internal Server Error");
        });
    } else {
      res.status(400).json(vR);
    }
  };
  static getCustomers = (req, res) => {
    models.Customers.findAll()
      .then((customers) => {
        res.status(200).json(customers);
      })
      .catch((err) => {
        res.status(500).send("Internal Server Error");
      });
  };
}
module.exports = CustomerController;
