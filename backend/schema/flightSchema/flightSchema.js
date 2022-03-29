const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    departure_time: { type: String, required: true },
    arrival_time: { type: String, required: true },
    duration: { type: String, required: true },
    fare: { type: Number, required: true },
    stops: { type: String, required: false },
    departure: { type: String, required: false },
    arrival: { type: String, required: false },
    flight_details: {
      baggage: { type: String, required: false },
      checkin: { type: String, required: false },
      cabin: { type: String, required: false },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Flight = mongoose.model("flight", flightSchema);

module.exports = Flight;

/*
{
    "name": "IndiGo",
    "departure_time": "22:55",
    "arrival_time": "01:45",
    "duration": "02 h 50 m",
    "fare": 10418,
    "stops": "Non stop",
    "departure": "New Delhi",
    "arrival": "Bengaluru",
    "flight_details": {
        "baggage": "ADULT",
        "checkin": "15 Kgs (1 piece only)",
        "cabin": "7 Kgs (1 piece only)"
    }
}
*/
