const express = require("express");
const uTurnApp = express();
const bodyParser = require("body-parser");
const usersRoute = require("../routes/users.routes");
uTurnApp.use(bodyParser.json());
uTurnApp.use("/api/v1/users", usersRoute);
module.exports = uTurnApp;
