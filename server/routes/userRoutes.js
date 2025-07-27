const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserProfile, // ✅ this must match what's defined in your controller
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile/:UserID", getUserProfile); // ✅ the new route

module.exports = router;



