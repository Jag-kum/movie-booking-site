const Ticket = require("../models/Ticket");
exports.bookTicket = async (req, res) => {
  try {
    console.log("🎟️ Booking request received:", req.body);

    const {
      UserID,
      MovieID,
      TheatreID,
      Date,
      Time,
      NoSeats,
      Seats,
      PaymentMode,
    } = req.body;

    const TicketID = "TICKET" + Math.floor(1000 + Math.random() * 9000);

    // Optional: fetch movie name from DB using MovieID if you want
    const movieTitle = "Dragon"; // Replace this later with actual DB call
    const seatStr = Seats.join(", ");
    const price = NoSeats * 200;

    const newTicket = new Ticket({
      TicketID,
      UserID,
      MovieID,
      TheatreID,
      Movie: movieTitle, // ✅ added field
      Seat: seatStr, // ✅ added field
      Price: price, // ✅ added field
      Date,
      Time,
      NoSeats,
      Seats,
      Status: "Confirmed",
      PaymentMode,
    });

    await newTicket.save();
    res.status(201).json({ message: "Booking successful", ticket: newTicket });
  } catch (err) {
    console.error("❌ Booking error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const { UserID } = req.params;

    const tickets = await Ticket.find({ UserID });
    res.status(200).json(tickets);
  } catch (err) {
    console.error("❌ Error fetching bookings:", err.message);
    res.status(500).json({ error: "Failed to load bookings" });
  }
};

exports.cancelTicket = async (req, res) => {
  try {
    const { TicketID } = req.params;
    const ticket = await Ticket.findOneAndDelete({ TicketID }); // ✅ Match by TicketID

    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }

    res.json({ message: "Ticket cancelled", TicketID });
  } catch (err) {
    console.error("❌ Cancel error:", err.message);
    res.status(500).json({ error: "Failed to cancel ticket" });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const all = await Ticket.find({});
    res.status(200).json(all);
  } catch (err) {
    console.error("❌ Error fetching all bookings:", err.message);
    res.status(500).json({ error: "Failed to load all bookings" });
  }
};
// controller: bookingController.js
exports.getAllBookedSeats = async (req, res) => {
  try {
    const { Date, Time } = req.query;

    // Optional filter by date & time
    const query = {};
    if (Date) query.Date = Date;
    if (Time) query.Time = Time;

    const tickets = await Ticket.find(query);
    const bookedSeats = tickets.flatMap(ticket => ticket.Seats);

    res.status(200).json({ bookedSeats });
  } catch (err) {
    console.error("❌ Error fetching booked seats:", err.message);
    res.status(500).json({ error: "Failed to load booked seats" });
  }
};
