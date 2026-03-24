const mongoose = require('mongoose');

const TutorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subjects: [{ type: String, required: true }],
  classLevels: [{ type: String, required: true }],
  experience: { type: Number, required: true }, // in years
  pricingPerHour: { type: Number, required: true },
  mode: { type: String, enum: ['online', 'offline', 'both'], required: true },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true }, // [longitude, latitude]
    city: { type: String }
  },
  rating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },
  verificationStatus: { type: Boolean, default: false },
  responseTime: { type: Number, default: 60 }, // in minutes
  availability: [{ type: String }],
  bio: { type: String },
  introVideoUrl: { type: String },
  updatedAt: { type: Date, default: Date.now }
});

// For geo-proximity logic
TutorSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Tutor', TutorSchema);
