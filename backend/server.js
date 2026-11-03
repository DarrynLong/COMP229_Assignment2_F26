// server.js - main server file for the application
// Author: Darryn
// Centennial College - Fall 2026

//=============================================================
//                          IMPORTS
//=============================================================

// attaching the backend .env file to the project
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

// import express
const express = require('express');

// import routes
const contactRoutes = require('./routes/contact_routes');
const projectRoutes = require('./routes/project_routes');
const educationRoutes = require('./routes/education_routes');
const userRoutes = require('./routes/user_routes');

// express app
const app = express();

// import mongoose
const mongoose = require('mongoose');


//=============================================================
//                         MIDDLEWARE
//=============================================================

// allows json data to be sent to the server
app.use(express.json()); 

// reject startup when JWT signing is not configured
if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is required in the backend .env file');
}

// logging the request path and method
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// backend health check
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to my Portfolio application.' });
});

// use routes
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/educations', educationRoutes);
app.use('/api/users', userRoutes);


//=============================================================
//                       CONNECT TO DB
//=============================================================

// connect to the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log('Connected to the database and listening for requests on port ' + process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });