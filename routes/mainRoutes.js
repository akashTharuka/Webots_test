const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.get_index);
router.get('/gameday', mainController.get_gameday);

router.get('/test', mainController.get_test);

module.exports = router;