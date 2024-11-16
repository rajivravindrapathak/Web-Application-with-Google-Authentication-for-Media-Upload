// server/index.js

const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const { connection } = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', authRoutes);
app.use('/api/media', mediaRoutes);


// Database connection and server start
app.listen(PORT, async () => {
    try {
        await connection;
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Database connection failed:', err);
    }
    console.log(`Server running on port ${PORT}`);
});

