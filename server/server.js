const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const paymentRoutes = require("./routes/paymentRoutes");



const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Register routes
app.use("/api/users", userRoutes);
app.use("/api/bookings", require("./routes/bookingRoutes"));

app.use("/api/payments", paymentRoutes);
app.use("/api/users", require("./routes/userRoutes"));


// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/movieticket")
  .then(() => {
    console.log("✅ Mongoose connected to MongoDB");

    // Start server only after DB is connected
    app.listen(5000, () => {
      console.log("🚀 Server running on http://localhost:5000");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

