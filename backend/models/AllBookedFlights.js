const mongoose = require("mongoose");

const AllBookedFlightsSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        name: { type: String, required: true },
        departure_time: { type: String, required: true },
        arrival_time: { type: String, required: true },
        duration: { type: String, required: false },
        fare: { type: Number, required: true },
        stops: { type: String, required: false },
        departure: { type: String, required: false },
        arrival: { type: String, required: false },
    },
    { versionKey: false, timestamps: true }
);

const AllBookedFlights = mongoose.model("allBookedFlights", AllBookedFlightsSchema);
module.exports = AllBookedFlights;
