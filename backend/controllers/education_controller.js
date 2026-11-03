// education_controller.js - controller for handling education-related requests
// Author: Darryn
// Centennial College - Fall 2026

//=============================================================
//                          IMPORTS
//=============================================================

// import the education model
const Education = require('../models/education_model');
const mongoose = require('mongoose');


//=============================================================
//                      REQUEST HANDLERS
//=============================================================

// GET all educations
const getAllEducations = async (req, res) => {
    try {
        const educations = await Education.find({}).sort({ completion: -1 });
        res.status(200).json(educations);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete all educations
const deleteAllEducations = async (req, res) => {
    try {
        const result = await Education.deleteMany({});
        res.status(200).json({
            message: 'All educations deleted successfully',
            deletedCount: result.deletedCount
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET a single education
const getEducation = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Education not found' });
    }

    const education = await Education.findById(id);

    if (!education) {
        return res.status(404).json({ error: 'Education not found' });
    }

    res.status(200).json(education);
};

// create a new education
const createEducation = async (req, res) => {
    const { title, firstname, lastname, email, completion, description } = req.body;

    try {
        const newEducation = await Education.create({
            title,
            firstname,
            lastname,
            email,
            completion,
            description
        });
        res.status(200).json(newEducation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete an education
const deleteEducation = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Education not found' });
    }

    const education = await Education.findOneAndDelete({ _id: id });

    if (!education) {
        return res.status(404).json({ error: 'Education not found' });
    }

    res.status(200).json({ message: 'Education deleted successfully' });
};

// update an education
const updateEducation = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Education not found' });
    }

    const education = await Education.findOneAndUpdate(
        { _id: id },
        { ...req.body },
        { new: true }
    );

    if (!education) {
        return res.status(404).json({ error: 'Education not found' });
    }

    res.status(200).json(education);
};

module.exports = {
    getAllEducations,
    deleteAllEducations,
    getEducation,
    createEducation,
    deleteEducation,
    updateEducation
};
