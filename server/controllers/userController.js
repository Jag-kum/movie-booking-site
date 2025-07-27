const User = require("../models/User");
const bcrypt = require("bcryptjs");

// POST /api/users/register
exports.registerUser = async (req, res) => {
  try {
    console.log("🚨 registerUser called");
    console.log("📥 Raw body received:", req.body); // 👈 log everything

    const { Name, Phone, UserName, Password } = req.body;

    if (!Name || !Phone || !UserName || !Password) {
      console.warn("⚠️ Missing field!", { Name, Phone, UserName, Password });
      return res.status(400).json({ error: "Missing required field" });
    }

    const existingUser = await User.findOne({ UserName });
    if (existingUser)
      return res.status(400).json({ error: "Username already taken" });

    const UserID = "USER" + Math.floor(1000 + Math.random() * 9000);
    const hashedPassword = await bcrypt.hash(Password, 10);

    const newUser = new User({
      UserID,
      Name,
      Phone,
      UserName,
      Password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully", UserID });
  } catch (err) {
    console.error("❌ registerUser error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.loginUser = async (req, res) => {
  try {
    console.log("🚨 loginUser called");

    const { UserName, Password } = req.body;

    const user = await User.findOne({ UserName });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) return res.status(401).json({ error: "Incorrect password" });

    console.log(`✅ Match found: ${user.UserID}`);

    res.json({ message: "Login successful", UserID: user.UserID });
  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.getUserProfile = async (req, res) => {
  try {
    console.log("📥 Incoming profile request for:", req.params.UserID);

    const user = await User.findOne({ UserID: req.params.UserID });

    if (!user) {
      console.log("❌ No user found for:", req.params.UserID);
      return res.status(404).json({ error: "User not found" });
    }

    console.log("✅ User found:", user);
    res.json(user);
  } catch (err) {
    console.error("❌ getUserProfile error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

