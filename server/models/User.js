const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String }, // Optional during OTP login
  phone: { type: String, required: true, unique: true },
  role: { type: String, enum: ['student', 'tutor'], default: 'student' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
