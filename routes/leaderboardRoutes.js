const express = require('express');
const leaderboardController = require('../controllers/leaderboardController');

const router = express.Router();

router.get('/uni', leaderboardController.get_uniLeaderboard);
router.get('/school', leaderboardController.get_schoolLeaderboard);

// router.get('/create', blogController.blog_create_get);
// router.get('/', blogController.blog_index);
// router.post('/', blogController.blog_create_post);
// router.get('/:id', blogController.blog_details);
// router.delete('/:id', blogController.blog_delete);

module.exports = router;