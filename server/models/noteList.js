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

const noteListSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  notes: {
    type: [noteSchema],
    default: [],
  },
});

module.exports = mongoose.model("NoteList", noteListSchema);
