const Payment = require("../models/Payment");

exports.makePayment = async (req, res) => {
  try {
    const { TicketID, PaymentAmount, PaymentMode } = req.body;

    const PaymentID = "PAY" + Math.floor(1000 + Math.random() * 9000);

    const newPayment = new Payment({
      PaymentID,
      TicketID,
      PaymentAmount,
      PaymentMode,
    });

    await newPayment.save();

    res.status(201).json({ message: "Payment recorded", PaymentID });
  } catch (err) {
    console.error("❌ Payment error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
