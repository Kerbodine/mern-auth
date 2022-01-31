const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
