const express = require("express");
const officeAccountsRouter = express.Router();
const OfficeAccountsController = require("../controllers/office_accounts.controller");
officeAccountsRouter.post(
  "/create",
  OfficeAccountsController.createOfficeAccounts
);
officeAccountsRouter.post(
  "/customerAccounts/create",
  OfficeAccountsController.createCustomerAccount
);
officeAccountsRouter.get(
  "/getOfficeAcounts/:userId",
  OfficeAccountsController.getOfficeAccounts
);

module.exports = officeAccountsRouter;
