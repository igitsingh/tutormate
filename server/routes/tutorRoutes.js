const express = require('express');
const router = express.Router();
const tutorController = require('../controllers/tutorController');

router.get('/:id', tutorController.getTutorProfile);
router.post('/review', tutorController.submitReview);

module.exports = router;
