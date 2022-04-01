const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const AllBookedHotels = require("../models/AllBookedHotels");
const fetchUser = require("../middleware/fetchUser");

// ROUTE 1: For Get hotels, Login required
router.get('/hotels', fetchUser, async (req, res) => {
    try {
        const bookings = await AllBookedHotels.find({ user: req.user.id })
        res.json({ status: 200, bookings });

    } catch (error) {
        console.log(error.message);
        res.status(500).json("Internal Server Error")
    }
})

// ROUTE 2: For Post hotels, Login required
router.post('/hotels', fetchUser, async (req, res) => {
    try {

        const bookings = await AllBookedHotels.create({ ...req.body, user: req.user.id });
        res.json({ status: 200, bookings });

    } catch (error) {
        console.log(error.message);
        res.status(500).json("Internal Server Error")
    }
})


module.exports = router
