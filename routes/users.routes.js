const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/users.controller");
usersRouter.post("/register", usersController.registration);
usersRouter.post("/login", usersController.login);
usersRouter.put("/update", usersController.updateUser);
usersRouter.put("/resetPassword", usersController.resetPassword);
module.exports = usersRouter;
