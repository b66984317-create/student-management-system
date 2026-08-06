const express = require('express');
const router = express.Router();
const { getAllStudents, getStudentById } = require('../models/studentModel');
const { sendSuccess, sendError } = require('../utils/response');

/**
 * GET /api/students
 * Returns all students
 */
router.get('/', async (req, res, next) => {
  try {
    const students = await getAllStudents();
    return sendSuccess(res, { message: 'Students fetched successfully', data: students });
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/students/:id
 * Returns a single student by ID
 */
router.get('/:id', async (req, res, next) => {
  try {
    const student = await getStudentById(req.params.id);
    if (!student) {
      return sendError(res, { statusCode: 404, message: 'Student not found' });
    }
    return sendSuccess(res, { message: 'Student fetched successfully', data: student });
  } catch (err) {
    next(err);
  }
});

module.exports = router;