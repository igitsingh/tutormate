const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const MatchingEngine = require('./services/MatchingEngine');
const StudentRequest = require('./models/StudentRequest');
const User = require('./models/User');
const Tutor = require('./models/Tutor');

const runTest = async () => {
  try {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
    
    // 0. Seed Tutors in memory
    const tutors = [
      { name: "Dr. Ananya Sharma", phone: "9988776655", subjects: ["Mathematics"], classLevels: ["JEE"], experience: 12, pricingPerHour: 800, mode: "both", location: { type: "Point", coordinates: [77.209, 28.613] }, rating: 4.9, verificationStatus: true, responseTime: 5 },
      { name: "Vikram Malhotra", phone: "8877665544", subjects: ["Mathematics"], classLevels: ["JEE"], experience: 8, pricingPerHour: 1100, mode: "online", location: { type: "Point", coordinates: [72.877, 19.076] }, rating: 4.7, verificationStatus: true, responseTime: 15 },
      { name: "Rahul Verma", phone: "7766554433", subjects: ["Mathematics"], classLevels: ["JEE"], experience: 3, pricingPerHour: 400, mode: "offline", location: { type: "Point", coordinates: [77.594, 12.971] }, rating: 4.2, verificationStatus: false, responseTime: 45 }
    ];
    for(const t of tutors) {
       const u = new User({ name: t.name, phone: t.phone, role: 'tutor' });
       await u.save();
       const tutor = new Tutor({ ...t, user: u._id });
       await tutor.save();
    }
    
    // 1. Get a test user
    const student = new User({ name: 'Test Student', phone: '0000000000' });
    await student.save();

    // 2. Scenario 1: High-budget JEE student in Delhi (Offline)
    const request1 = new StudentRequest({
        user: student._id,
        subject: "Mathematics",
        classLevel: "JEE",
        mode: "offline",
        budget: 1000,
        location: { type: "Point", coordinates: [77.209, 28.613] } // Delhi
    });

    console.log("\n--- Scenario 1: JEE Maths Offline in Delhi ---");
    const matches1 = await MatchingEngine.findMatches(request1);
    matches1.forEach((m, i) => {
        console.log(`${i+1}. ${m.tutorInfo.name} | Score: ${m.matchScore}% | Tutor Price: ${m.tutorInfo.pricingPerHour}`);
    });

    // 3. Scenario 2: High-budget JEE student (Online)
    const request2 = new StudentRequest({
        user: student._id,
        subject: "Mathematics",
        classLevel: "JEE",
        mode: "online",
        budget: 1000
    });

    console.log("\n--- Scenario 2: JEE Maths Online ---");
    const matches2 = await MatchingEngine.findMatches(request2);
    matches2.forEach((m, i) => {
        console.log(`${i+1}. ${m.tutorInfo.name} | Score: ${m.matchScore}% | Tutor Price: ${m.tutorInfo.pricingPerHour}`);
    });

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

runTest();
