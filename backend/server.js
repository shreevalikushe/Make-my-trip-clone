const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());

const hotelController = require("./controllers/hotels.controller.js")

app.use("/hotels", hotelController)
const connect = () => {
  return mongoose.connect(process.env.MONGO_URL);
};
app.listen(8000, async (req, res) => {
  try {
    await connect();
    console.log("Listening on port 8000");
  } catch (e) {
    res.status(400).json(e.message);
  }
});
