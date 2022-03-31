const mongoose = require("mongoose");

const AllBookedHotelsSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        name: { type: String, required: true },
        location: { type: String, required: true },
        country: { type: String, required: true },
        price: { type: Number, required: true },
        cover: { type: String, required: false },
    },
    { versionKey: false, timestamps: true }
);

const AllBookedHotels = mongoose.model("allBookedHotels", AllBookedHotelsSchema);
module.exports = AllBookedHotels;

