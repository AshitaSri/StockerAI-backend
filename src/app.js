const express = require('express');
const bodyParser = require('body-parser');
const stockRoutes = require('./routes/stockRoutes');
// const userRoutes = require('./routes/userRoutes');
// const connectDB = require('./config/db');

const app = express();

// Connect to database
//connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', stockRoutes);

module.exports = app;
