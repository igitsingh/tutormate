const mongoose = require('mongoose');

const StudentRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: String, required: true },
  classLevel: { type: String, required: true },
  mode: { type: String, enum: ['online', 'offline', 'hybrid'], required: true },
  budget: { type: Number },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number] }, // [longitude, latitude]
    city: { type: String }
  },
  preferredTimings: { type: String },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['open', 'matched', 'closed'], default: 'open' }
});

StudentRequestSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('StudentRequest', StudentRequestSchema);
