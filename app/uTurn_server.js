require("dotenv").config();
const uTurnApp = require("./uTurn");
const port = process.env.PORT;
const mode = process.env.MODE;

uTurnApp.listen(port, () => {
  console.log("Running on Localhost Port No ", [port], " Mode : ", [mode]);
});
