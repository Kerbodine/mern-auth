const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  completed: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Note", noteSchema);
