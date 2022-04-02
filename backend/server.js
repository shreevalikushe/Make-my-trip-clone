const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());

const hotelController = require("./controllers/hotels.controller.js");
const authRoute = require("./routes/auth");
const bookedFlightRoute = require("./routes/BookedFlight");
const bookedHotelRoute = require("./routes/BookedHotel");
const flightController = require("./controllers/flightController/flight.controller");

const connect = () => {
  return mongoose.connect(process.env.MONGOOSE_DB_URL);
};

app.use("/hotels", hotelController);
app.use("/auth", authRoute);
app.use("/bookings", bookedFlightRoute);
app.use("/bookings", bookedHotelRoute);
app.use("/flights", flightController);

app.listen(process.env.PORT, async (req, res) => {
  await connect();
  console.log(`Listening on port ${process.env.PORT}`);
});
