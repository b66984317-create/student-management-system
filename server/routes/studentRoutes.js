const express = require('express');
const validateStudent = require('../middleware/validateStudent');
const router = express.Router();
const { getAllStudents, createStudent, getStudentByEmail } = require('../models/studentModel');
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

// POST /api/students - create a new student
router.post('/', validateStudent, async (req, res, next) => {
  try {
    const { first_name, last_name, email, date_of_birth } = req.body;

    // Check for duplicate email
    const existing = await getStudentByEmail(email);
    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'A student with this email already exists'
      });
    }

    const newStudent = await createStudent({ first_name, last_name, email, date_of_birth });

    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: newStudent
    });
  } catch (err) {
    next(err); // pass to your centralized error handler
  }
});

module.exports = router;