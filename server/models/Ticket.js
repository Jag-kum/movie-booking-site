const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  TicketID: String,
  UserID: String,
  MovieID: String,
  TheatreID: String,
  Movie: String, // ✅ Make sure this exists
  Seat: String, // ✅ example: "A1, A2"
  Price: Number, // ✅ example: 3 seats * 200
  Date: String,
  Time: String,
  NoSeats: Number,
  Seats: [String],
  Status: String,
  PaymentMode: String,
});

module.exports = mongoose.model("Ticket", ticketSchema);

