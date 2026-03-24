const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// 🔐 POST /api/auth/login
// Verify phone from Firebase and issue JWT
router.post("/login", async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) return res.status(400).json({ success: false, message: "Phone is required" });

    let user = await User.findOne({ phone });

    // Auto-register if user doesn't exist
    let isNewUser = false;
    if (!user) {
      user = await User.create({
        phone,
        role: "student", // default role
      });
      isNewUser = true;
    }

    const token = jwt.sign(
      { id: user._id, phone: user.phone, role: user.role },
      process.env.JWT_SECRET || "tutormate_secret_key_2026",
      { expiresIn: "7d" }
    );

    res.json({ success: true, token, user, isNewUser });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// 🎭 POST /api/auth/select-role
// Update user role after first login
router.post("/select-role", async (req, res) => {
    try {
        const { userId, role } = req.body;
        if (!['student', 'tutor'].includes(role)) {
            return res.status(400).json({ success: false, message: "Invalid role" });
        }

        const user = await User.findByIdAndUpdate(userId, { role }, { new: true });
        res.json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
