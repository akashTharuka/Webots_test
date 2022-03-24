const express = require('express');
const dashboardController = require('../controllers/dashboardController');

const router = express.Router();

router.get('/uni', dashboardController.get_uniLeaderboard);
router.get('/school', dashboardController.get_schoolLeaderboard);

module.exports = router;