Movie Ticket Booking System

A full-stack movie ticket booking platform where users can view available seats, select show dates, book movie tickets, and manage bookings — all through a dynamic and interactive UI inspired by BookMyShow.

🔧 Tech Stack

Frontend: HTML, CSS, JavaScript (Vanilla)

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

API Architecture: RESTful APIs

Storage: localStorage & sessionStorage for persistence

🚀 Features

🔐 User Login & Session Handling

📅 Dynamic Date Selection for next 4 days (BookMyShow style)

🎭 Real-Time Seat Availability by date and time

✅ Booking Confirmation with summary view

🧾 Payment redirection with details

📓 Profile Page showing user bookings & option to cancel

🗑️ Live Ticket Cancellation and seat status refresh

📁 Project Structure
.
├── client/
│   ├── booking.html
│   ├── profile.html
│   ├── login.html
│   └── payment.html
├── server/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   └── controllers/
└── public/
    └── Images/

📦 APIs Used

POST /api/users/login – User authentication

POST /api/bookings/book – Create a booking

GET /api/bookings/user/:UserID – Fetch user-specific bookings

DELETE /api/bookings/:TicketID – Cancel a booking

GET /api/bookings/seats?Date=...&Time=... – Get live booked seats

📊 MongoDB Schema (Mongoose)
Ticket {
  TicketID,
  UserID,
  MovieID,
  TheatreID,
  Movie,
  Seat,
  Price,
  Date,
  Time,
  NoSeats,
  Seats: [String],
  Status,
  PaymentMode
}

📌 How to Run
# Start the server
cd server
npm install
node server.js

# Open index or booking.html in a browser

🎯 Future Enhancements

✅ Add showtime selection

💳 Integrate real payment gateway (Razorpay/Stripe)

📲 Mobile responsiveness

🔍 Movie search and filter
