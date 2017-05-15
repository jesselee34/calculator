// Import express
const express = require('express');
const controller = require('./controller');

// Create a router
const router = express.Router();

// Handle GET requests
router.get('/', (res, req) => {
  let response;
  let status;
  let args = res.query.operands;
  try {
    // Success
    response = controller(args);
  } catch (err) {
    // Failure
    if (err.code === '400-1' || err.code === '400-2') {
      res.status(400);

      response = {
        status: err.status,
        message: err.message
      };
    } else {
      res.status(500);

      respons = {
        status: 'Internal Server Error',
        message: 'There was an unkown internal server error. Please try again later.'
      };
    }

    return;
  }

  res.json(response);
});

module.exports = router;