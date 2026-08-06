const { sendSuccess } = require('../utils/response');
const express = require('express');
const router = express.Router();

// GET /api/health
router.get('/', (req, res) => {
  sendSuccess(res, { message: 'Server is healthy', data: { status: 'ok' } });
});

module.exports = router;