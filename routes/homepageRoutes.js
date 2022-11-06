const express = require('express');
const homepageController = require('../controllers/homepageController');

const router = express.Router();

router.post('/query', homepageController.post_queries);

module.exports = router;
