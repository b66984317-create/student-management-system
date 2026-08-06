const dbTestRoute = require('./routes/dbTest');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const studentRoutes = require('./routes/studentRoutes');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const healthRoutes = require('./routes/healthRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
// Security headers
app.use(helmet());

// Basic rate limiting — applies to all requests
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  standardHeaders: true, // return rate limit info in RateLimit-* headers
  legacyHeaders: false, // disable X-RateLimit-* headers
  message: {
    success: false,
    message: 'Too many requests, please try again later.',
    data: null,
  },
});

app.use(apiLimiter);

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/db-test', dbTestRoute);
app.use('/api/students', studentRoutes);
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/health', healthRoutes);

// 404 handler — catches any request that didn't match a route above
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: `Route ${req.originalUrl} not found`
  });
});

// Centralized error handler — catches errors passed via next(err)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});