// user_controller.js - controller for handling user-related requests
// Author: Darryn
// Centennial College - Fall 2026

//=============================================================
//                          IMPORTS
//=============================================================

// import the user model
const User = require('../models/user_model');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//=============================================================
//                      REQUEST HANDLERS
//=============================================================

// GET all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({ created: -1 });
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// create a JSON Web Token for an authenticated user
const createToken = (userId) => jwt.sign(
    { userId: userId.toString() },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
);

// remove private fields before returning a user to the client
const userResponse = (user) => ({
    id: user._id,
    name: user.name,
    email: user.email,
    created: user.created,
    updated: user.updated
});

// register a new user account
const signupUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    try {
        const normalizedEmail = email.trim().toLowerCase();
        const existingUser = await User.findOne({ email: normalizedEmail });

        if (existingUser) {
            return res.status(409).json({ error: 'Email is already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            password: hashedPassword
        });

        res.status(201).json({
            message: 'User registered successfully',
            user: userResponse(user)
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// authenticate a user and return a JSON Web Token
const signinUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email: email.trim().toLowerCase() }).select('+password');

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        res.status(200).json({
            message: 'Sign in successful',
            token: createToken(user._id),
            user: userResponse(user)
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// sign out by telling the client to remove its stored token
const signoutUser = (req, res) => {
    res.status(200).json({ message: 'Sign out successful' });
};

// return the authenticated user's account
const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(userResponse(user));
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete all users
const deleteAllUsers = async (req, res) => {
    try {
        const result = await User.deleteMany({});
        res.status(200).json({
            message: 'All users deleted successfully',
            deletedCount: result.deletedCount
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET a single user
const getUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'User not found' });
    }

    const user = await User.findById(id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
};

// create a new user
const createUser = async (req, res) => {
    const { name, email, password, created, updated } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email: email.trim().toLowerCase(),
            password: hashedPassword,
            created,
            updated
        });
        res.status(201).json(userResponse(newUser));
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'User not found' });
    }

    const user = await User.findOneAndDelete({ _id: id });

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
};

// update a user
const updateUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'User not found' });
    }

    const updates = { ...req.body, updated: new Date() };

    if (updates.password) {
        updates.password = await bcrypt.hash(updates.password, 10);
    }

    const user = await User.findOneAndUpdate({ _id: id }, updates, { new: true });

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
};

module.exports = {
    getAllUsers,
    deleteAllUsers,
    signupUser,
    signinUser,
    signoutUser,
    getCurrentUser,
    getUser,
    createUser,
    deleteUser,
    updateUser
};
