// user_routes.js - routes to user collection in the database
// Author: Darryn
// Centennial College - Fall 2026

//=============================================================
//                          IMPORTS
//=============================================================

// import express & create router & import controllers
const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/require_auth');

// import user controller
const {
    getAllUsers,
    deleteAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    signupUser,
    signinUser,
    signoutUser,
    getCurrentUser
} = require('../controllers/user_controller');


//=============================================================
//                        USER ROUTES
//=============================================================

// register, authenticate, and sign out users
router.post('/signup', signupUser);
router.post('/signin', signinUser);
router.post('/signout', requireAuth, signoutUser);
router.get('/me', requireAuth, getCurrentUser);

// GET all users
router.get('/', requireAuth, getAllUsers);

// GET a single user
router.get('/:id', requireAuth, getUser);

// POST a new user
router.post('/', requireAuth, createUser);

// DELETE all users
router.delete('/', requireAuth, deleteAllUsers);

// DELETE a user
router.delete('/:id', requireAuth, deleteUser);

// Update a user
router.put('/:id', requireAuth, updateUser);


//=============================================================
//                          EXPORT
//=============================================================

// export the router
module.exports = router;
