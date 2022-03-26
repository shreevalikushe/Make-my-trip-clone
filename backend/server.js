const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const connect = () => {
  return mongoose.connect(process.env.MONGO_URL);
};
app.listen(1234, async (req, res) => {
  await connect();
  console.log("Listening on port 1234");
});
