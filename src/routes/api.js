const express = require('express');
const router = express.Router();
const { shortenLink } = require('../controllers/linkController');

// Endpoint para encurtar URL
router.post('/shorten', shortenLink);

module.exports = router;
