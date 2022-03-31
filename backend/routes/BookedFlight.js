const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const AllBookedFlights = require("../models/AllBookedFlights");
const fetchUser = require("../middleware/fetchUser");

// ROUTE 1: For Get flights, Login required
router.get('/flights', fetchUser, async (req, res) => {
    try {
        const bookings = await AllBookedFlights.find({ user: req.user.id })
        res.json({ status: 200, bookings });

    } catch (error) {
        console.log(error.message);
        res.status(500).json("Internal Server Error")
    }
})

// ROUTE 2: For Post flights, Login required
router.post('/flights', fetchUser, async (req, res) => {
    try {

        const bookings = await AllBookedFlights.create({ ...req.body, user: req.user.id });
        res.json({ status: 200, bookings });

    } catch (error) {
        console.log(error.message);
        res.status(500).json("Internal Server Error")
    }
})


module.exports = router
