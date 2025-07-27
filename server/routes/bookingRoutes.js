const express = require("express");
const router = express.Router();
const {
  bookTicket,
  getUserBookings,
  cancelTicket,
  getAllBookings,
  getAllBookedSeats, // ✅ required
} = require("../controllers/bookingController");

router.post("/book", bookTicket);
router.get("/user/:UserID", getUserBookings);
router.delete("/:TicketID", cancelTicket);
router.get("/", getAllBookings); // optional
router.get("/all", getAllBookedSeats); // ✅ <-- Add this
router.get("/seats", getAllBookedSeats);  // /api/bookings/seats?Date=...&Time=...


module.exports = router;
