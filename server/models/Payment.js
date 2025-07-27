const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    PaymentID: {
      type: String,
      required: true,
      unique: true,
    },
    TicketID: {
      type: String,
      required: true,
    },
    PaymentAmount: {
      type: Number,
      required: true,
    },
    PaymentMode: {
      type: String,
      required: true,
    },
    Refund: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
