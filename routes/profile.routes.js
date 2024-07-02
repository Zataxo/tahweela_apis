const express = require("express");
const profileRouter = express.Router();
const profileController = require("../controllers/profiles.controller");
profileRouter.post("/create", profileController.createProfile);
profileRouter.get("/getUserProfile/:userId", profileController.getUserProfile);

module.exports = profileRouter;
