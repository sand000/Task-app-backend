const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    password: { type: String, required: true, minlength: 8 },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
