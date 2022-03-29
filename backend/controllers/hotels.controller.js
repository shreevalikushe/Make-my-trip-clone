
   
const express = require("express");
const Hotels = require("../models/hotels.model");
const router = express.Router();

//GET
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotels.find();
    res.status(200).send(hotels);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotels.findById(req.params.id);
    res.status(200).send(hotel);
  } catch (e) {
    res.status(400).send(e.message);
  }
});



module.exports = router;