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
async function createStudent({ first_name, last_name, email, date_of_birth }) {
  const [result] = await pool.query(
    `INSERT INTO students (first_name, last_name, email, date_of_birth)
     VALUES (?, ?, ?, ?)`,
    [first_name, last_name, email, date_of_birth]
  );

  const [rows] = await pool.query(
    `SELECT * FROM students WHERE id = ?`,
    [result.insertId]
  );

  return rows[0];
}

// Find a student by email (used for duplicate-check before insert)
async function getStudentByEmail(email) {
  const [rows] = await pool.query(
    `SELECT * FROM students WHERE email = ?`,
    [email]
  );
  return rows[0]; // undefined if no match found
}

module.exports = {
  getAllStudents, createStudent, getStudentByEmail
};
