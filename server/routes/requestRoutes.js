const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController');

router.post('/create-request', requestController.createRequest);
router.get('/matches/:requestId', requestController.getRequestMatches);

module.exports = router;
