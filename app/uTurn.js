const express = require("express");
const uTurnApp = express();
const bodyParser = require("body-parser");
const usersRoute = require("../routes/users.routes");
const profilesRoute = require("../routes/profile.routes");
uTurnApp.use(bodyParser.json());
uTurnApp.use("/api/v1/users", usersRoute);
uTurnApp.use("/api/v1/profiles", profilesRoute);
module.exports = uTurnApp;
