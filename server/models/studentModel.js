const pool = require('../config/db');

/**
 * Get all students
 */
async function getAllStudents() {
  const [rows] = await pool.query(
    'SELECT id, first_name, last_name, email, date_of_birth, enrollment_date, created_at, updated_at FROM students ORDER BY id DESC'
  );
  return rows;
}

/**
 * Get a single student by ID
 */
async function getStudentById(id) {
  const [rows] = await pool.query(
    'SELECT id, first_name, last_name, email, date_of_birth, enrollment_date, created_at, updated_at FROM students WHERE id = ?',
    [id]
  );
  return rows[0] || null;
}

module.exports = {
  getAllStudents,
  getStudentById,
};