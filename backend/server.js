const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const flightController = require("./controllers/flightController/flight.controller");
const app = express();
app.use(express.json());

const connect = () => {
  return mongoose.connect(process.env.MONGO_URL);
};

app.use("/flights", flightController);

app.listen(1234, async (req, res) => {
  await connect();
  console.log("Listening on port 1234");
});
