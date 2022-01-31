const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  createdDate: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("User", userSchema);
