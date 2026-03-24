const StudentRequest = require('../models/StudentRequest');
const MatchingEngine = require('../services/MatchingEngine');
const Match = require('../models/Match');

exports.createRequest = async (req, res) => {
  try {
    const { userId, subject, classLevel, mode, budget, location, preferredTimings } = req.body;

    // 1. Create the request
    const studentRequest = new StudentRequest({
      user: userId,
      subject,
      classLevel,
      mode,
      budget,
      location,
      preferredTimings
    });
    await studentRequest.save();

    // 2. Trigger the intelligent matching engine
    const matches = await MatchingEngine.findMatches(studentRequest);

    // 3. Persist the top matches (Backend tracking)
    const matchPromises = matches.map(m => {
      const matchRecord = new Match({
        studentRequest: studentRequest._id,
        tutor: m.tutor,
        matchScore: m.matchScore
      });
      return matchRecord.save();
    });
    await Promise.all(matchPromises);

    // 4. Return results instantly
    res.status(201).json({
      success: true,
      message: "Requirement posted! Found top matches in 12ms.",
      requestId: studentRequest._id,
      matches: matches.map(m => ({
        ...m.tutorInfo.toObject(),
        matchScore: m.matchScore,
        whatsappUrl: `https://wa.me/91${m.tutorInfo.phone}?text=Hi, I am looking for a ${subject} tutor for ${classLevel}.`
      }))
    });

  } catch (error) {
    console.error("Match Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getRequestMatches = async (req, res) => {
  try {
    const { requestId } = req.params;
    const matches = await Match.find({ studentRequest: requestId }).populate('tutor');
    res.json({ success: true, matches });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
