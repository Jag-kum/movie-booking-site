const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  MovieID: String,
  Title: String,
  Duration: String,
  Language: String,
  IMG: String,
  TrailerLink: String,
  MovieTrailer: String,
  FromDate: String,
  ToDate: String,
});

module.exports = mongoose.model("Movie", movieSchema);
