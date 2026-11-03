// contact_model.js - model for the contact collection in the database
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

// create a schema for the contact collection
const contactSchema = new Schema({
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
        required: true,
        unique: true
    }
}, {
    collection: 'contacts'
}); 


//=============================================================
//                          EXPORTS
//=============================================================

// export the model to be used in other files
module.exports = mongoose.model('Contact', contactSchema);