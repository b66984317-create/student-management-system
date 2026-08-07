// Basic validation for student creation
function validateStudent(req, res, next) {
  const { first_name, last_name, email, date_of_birth } = req.body;

  const errors = [];

  // Required field checks
  if (!first_name || first_name.trim() === '') {
    errors.push('first_name is required');
  }
  if (!last_name || last_name.trim() === '') {
    errors.push('last_name is required');
  }
  if (!email || email.trim() === '') {
    errors.push('email is required');
  }
  if (!date_of_birth || date_of_birth.trim() === '') {
    errors.push('date_of_birth is required');
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    errors.push('email format is invalid');
  }

  // Basic date format check (expects YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (date_of_birth && !dateRegex.test(date_of_birth)) {
    errors.push('date_of_birth must be in YYYY-MM-DD format');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  next();
}

module.exports = validateStudent;