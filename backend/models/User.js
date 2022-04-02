const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile_number: {
      type: Number,
      required: true,
      unique: true,
      minLength: 10,
    },
    email: { type: String, required: true },
    password: { type: String, required: true, minLength: 8 },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
