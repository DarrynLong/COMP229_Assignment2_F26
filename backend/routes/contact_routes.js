// contact_routes.js - routes to contact collection in the database
// Author: Darryn
// Centennial College - Fall 2026

//=============================================================
//                          IMPORTS
//=============================================================

// import express & create router & import controllers
const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/require_auth');

// import contact controller
const { 
    getAllContacts,
    deleteAllContacts,
    getContact,
    createContact,
    deleteContact,
    updateContact,
} = require('../controllers/contact_controller');


//=============================================================
//                      CONTACT ROUTES
//=============================================================

// GET all contacts
router.get('/', getAllContacts);

// GET a single contact
router.get('/:id', getContact);

// POST a new contact
router.post('/', requireAuth, createContact);

// DELETE all contacts
router.delete('/', requireAuth, deleteAllContacts);

// DELETE a contact
router.delete('/:id', requireAuth, deleteContact);

// Update a contact
router.put('/:id', requireAuth, updateContact);

//=============================================================
//                          EXPORT
//=============================================================

//export the router
module.exports = router;