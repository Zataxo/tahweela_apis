const express = require("express");
const reminderRouter = express.Router();
const remindersController = require("../controllers/reminders.controllers");
reminderRouter.post("/create", remindersController.createReminder);
reminderRouter.get(
  "/getUserReminders/:userId",
  remindersController.getUserReminders
);
module.exports = reminderRouter;
