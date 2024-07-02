const express = require("express");
const currencyRouter = express.Router();
const currencyController = require("../controllers/currency.controller");
currencyRouter.post("/create", currencyController.createCurrency);
module.exports = currencyRouter;
