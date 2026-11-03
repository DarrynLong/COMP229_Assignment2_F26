// project_routes.js - routes to project collection in the database
// Author: Darryn
// Centennial College - Fall 2026

//=============================================================
//                          IMPORTS
//=============================================================

// import express & create router & import controllers
const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/require_auth');

// import project controller
const {
    getAllProjects,
    deleteAllProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
} = require('../controllers/project_controller');


//=============================================================
//                      PROJECT ROUTES
//=============================================================

// GET all projects
router.get('/', getAllProjects);

// GET a single project
router.get('/:id', getProject);

// POST a new project
router.post('/', requireAuth, createProject);

// DELETE all projects
router.delete('/', requireAuth, deleteAllProjects);

// DELETE a project
router.delete('/:id', requireAuth, deleteProject);

// Update a project
router.put('/:id', requireAuth, updateProject);


//=============================================================
//                          EXPORT
//=============================================================

// export the router
module.exports = router;
