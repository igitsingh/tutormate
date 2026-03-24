const Tutor = require('../models/Tutor');

exports.getTutorProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const tutor = await Tutor.findById(id).populate('user', 'name phone');
    if (!tutor) return res.status(404).json({ success: false, message: "Tutor not found" });

    res.json({ success: true, tutor });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.submitReview = async (req, res) => {
  try {
    const { tutorId, rating, comment } = req.body;
    
    const tutor = await Tutor.findById(tutorId);
    if (!tutor) return res.status(404).json({ success: false, message: "Tutor not found" });

    // Update aggregate rating
    const totalRating = (tutor.rating * tutor.totalReviews) + rating;
    tutor.totalReviews += 1;
    tutor.rating = totalRating / tutor.totalReviews;
    
    await tutor.save();

    res.json({ success: true, message: "Review submitted!", rating: tutor.rating });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
