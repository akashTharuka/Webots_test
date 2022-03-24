const express = require('express');
const leaderboardController = require('../controllers/leaderboardController');

const router = express.Router();

router.get('/uni', leaderboardController.get_uniLeaderboard);
router.get('/school', leaderboardController.get_schoolLeaderboard);

module.exports = router;