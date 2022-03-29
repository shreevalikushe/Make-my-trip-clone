const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
app.use(express.json());

const hotelController = require("./controllers/hotels.controller.js")
const authRoute = require("./routes/auth");
const bookedFlightRoute = require("./routes/BookedFlight");
const flightController = require("./controllers/flightController/flight.controller");


app.use("/hotels", hotelController);
app.use(cors());
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
