const express = require("express");
const customerRouter = express.Router();
const customerController = require("../controllers/customers.controller");
customerRouter.post("/create", customerController.createCustomer);
customerRouter.get("/getCustomers", customerController.getCustomers);

module.exports = customerRouter;
