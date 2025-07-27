const express = require("express");
const router = express.Router();

// Dummy GET endpoint to test
router.get("/", (req, res) => {
  res.send("Movies route working!");
});

module.exports = router;
