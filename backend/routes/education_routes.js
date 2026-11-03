// education_routes.js - routes to education collection in the database
// Author: Darryn
// Centennial College - Fall 2026

//=============================================================
//                          IMPORTS
//=============================================================

// import express & create router & import controllers
const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/require_auth');

// import education controller
const {
    getAllEducations,
    deleteAllEducations,
    getEducation,
    createEducation,
    deleteEducation,
    updateEducation
} = require('../controllers/education_controller');


//=============================================================
//                     EDUCATION ROUTES
//=============================================================

// GET all educations
router.get('/', getAllEducations);

// GET a single education
router.get('/:id', getEducation);

// POST a new education
router.post('/', requireAuth, createEducation);

// DELETE all educations
router.delete('/', requireAuth, deleteAllEducations);

// DELETE an education
router.delete('/:id', requireAuth, deleteEducation);

// Update an education
router.put('/:id', requireAuth, updateEducation);


//=============================================================
//                          EXPORT
//=============================================================

// export the router
module.exports = router;
