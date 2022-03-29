const express = require("express");
const Flight = require("../../schema/flightSchema/flightSchema");
const router = express.Router();

//GET
router.get("/", async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).send(flights);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

//GET BY ID
router.get("/:id", async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    res.status(200).send(flight);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});
//POST
router.post("/", async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    res.status(201).send(flight);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

module.exports = router;
