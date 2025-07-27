const mongoose = require("mongoose");
const theatreSchema = new mongoose.Schema({
  TheatreID: String,
  MovieID: String,
  Location: String,
  Date: String,
  Time: String,
  DirectionLink: String,
});

module.exports = mongoose.model("Theatre", theatreSchema);
