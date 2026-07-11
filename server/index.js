const dbTestRoute = require('./routes/dbTest');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const healthRoutes = require('./routes/healthRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/db-test', dbTestRoute);
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