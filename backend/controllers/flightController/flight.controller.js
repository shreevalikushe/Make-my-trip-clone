const express = require("express");
const Flight = require("../../schema/flightSchema/flightSchema");
const router = express.Router();

//GET
router.get("/", async (req, res) => {
  try {
    const flights = await Flight.find();
    console.log(flights.length);
    res.status(200).send(flights);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

//POSTl
router.post("/", async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    res.status(201).send(flight);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

module.exports = router;
