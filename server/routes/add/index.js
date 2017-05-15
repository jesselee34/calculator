// Import express
const express = require('express');
const controller = require('./controller');

// Create a router
const router = express.Router();

// Handle GET requests
router.get('/', controller);

module.exports = router;