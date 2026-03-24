const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
  studentRequest: { type: mongoose.Schema.Types.ObjectId, ref: 'StudentRequest', required: true },
  tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor', required: true },
  matchScore: { type: Number, required: true }, // 0 to 100
  status: { type: String, enum: ['pending', 'contacted', 'converted', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Match', MatchSchema);
