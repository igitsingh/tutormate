const mongoose = require('mongoose');
const User = require('./models/User');
const Tutor = require('./models/Tutor');

const seedData = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/gurumatch');
    
    // Clear existing
    await User.deleteMany({});
    await Tutor.deleteMany({});

    // 1. Create Tutors
    const tutors = [
      {
        name: "Dr. Ananya Sharma",
        phone: "9988776655",
        subjects: ["Mathematics", "Physics"],
        classLevels: ["10th", "12th", "JEE"],
        experience: 12,
        pricingPerHour: 800,
        mode: "both",
        location: { type: "Point", coordinates: [77.209, 28.613], city: "New Delhi" },
        rating: 4.9,
        verificationStatus: true,
        responseTime: 5
      },
      {
        name: "Vikram Malhotra",
        phone: "8877665544",
        subjects: ["Chemistry", "Physics"],
        classLevels: ["12th", "NEET"],
        experience: 8,
        pricingPerHour: 600,
        mode: "online",
        location: { type: "Point", coordinates: [72.877, 19.076], city: "Mumbai" },
        rating: 4.7,
        verificationStatus: true,
        responseTime: 15
      },
      {
        name: "Rahul Verma",
        phone: "7766554433",
        subjects: ["Mathematics"],
        classLevels: ["10th"],
        experience: 3,
        pricingPerHour: 400,
        mode: "offline",
        location: { type: "Point", coordinates: [77.594, 12.971], city: "Bengaluru" },
        rating: 4.2,
        verificationStatus: false,
        responseTime: 45
      }
    ];

    for (const t of tutors) {
       const user = new User({ name: t.name, phone: t.phone, role: 'tutor' });
       await user.save();
       const tutor = new Tutor({ ...t, user: user._id });
       await tutor.save();
    }

    console.log("✅ Database Seeded Successfully!");
    process.exit(0);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();
