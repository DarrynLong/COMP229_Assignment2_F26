// user_model.js - model for the user collection in the database
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

// create a schema for the user collection
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated: {
        type: Date,
        required: true,
        default: Date.now
    }
}, {
    collection: 'users'
});


//=============================================================
//                          EXPORTS
//=============================================================

// export the model to be used in other files
module.exports = mongoose.model('User', userSchema);
