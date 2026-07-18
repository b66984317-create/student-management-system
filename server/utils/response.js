/**
 * Standardized API response helpers.
 * Ensures every route returns a consistent { success, message, data } shape.
 */

function sendSuccess(res, { statusCode = 200, message = 'Success', data = null } = {}) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

function sendError(res, { statusCode = 500, message = 'Something went wrong', data = null } = {}) {
  return res.status(statusCode).json({
    success: false,
    message,
    data,
  });
}

module.exports = { sendSuccess, sendError };