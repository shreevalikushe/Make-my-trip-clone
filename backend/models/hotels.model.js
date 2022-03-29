const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ratings: {type:Number, required:false},
    location: { type: String, required: true },
    country: { type: String, required: true },
    price: {type:Number, required:false},
    cover:{ type: String, required: true},
    extraimageUrl:[{type:String}]
}, {
    versionKey:false,
    timestamps:true
})

const Hotel = mongoose.model("hotels", hotelSchema);

module.exports = Hotel