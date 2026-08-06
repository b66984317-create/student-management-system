const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const { sendSuccess } = require('../utils/response');

// GET /api/db-test - verifies MySQL connection is working
router.get('/', async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    sendSuccess(res, { message: 'Database connection successful', data: { result: rows[0].result } });
  } catch (err) {
    next(err); // passes error to centralized error middleware
  }
});

module.exports = router;