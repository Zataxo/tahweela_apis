const express = require("express");
const transactionsRouter = express.Router();
const transactionController = require("../controllers/transactions.controller");
transactionsRouter.post("/create", transactionController.createTransaction);
module.exports = transactionsRouter;
