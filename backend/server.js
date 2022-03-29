const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoute = require("./routes/auth")
const bookedFlightRoute = require("./routes/BookedFlight")
const flightController = require("./controllers/flightController/flight.controller");

const app = express();
app.use(express.json());

const connect = () => {
  return mongoose.connect(process.env.MONGOOSE_DB_URL);
};

app.use("/auth", authRoute);
app.use("/bookings", bookedFlightRoute);
app.use("/flights", flightController);

app.listen(1234, async (req, res) => {
  await connect();
  console.log("Listening on port 1234");
});
