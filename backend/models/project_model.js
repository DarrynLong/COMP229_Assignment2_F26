// project_model.js - model for the project collection in the database
// Author: Darryn
// Centennial College - Fall 2026

//=============================================================
//                          IMPORTS
//=============================================================

// import mongoose & schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//=============================================================
//                         SCHEMA
//=============================================================

// create a schema for the project collection
const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    completion: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    collection: 'projects'
});


//=============================================================
//                          EXPORTS
//=============================================================

// export the model to be used in other files
module.exports = mongoose.model('Project', projectSchema);
