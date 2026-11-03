// project_controller.js - controller for handling project-related requests
// Author: Darryn
// Centennial College - Fall 2026

//=============================================================
//                          IMPORTS
//=============================================================

// import the project model
const Project = require('../models/project_model');
const mongoose = require('mongoose');


//=============================================================
//                      REQUEST HANDLERS
//=============================================================

// GET all projects
const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find({}).sort({ completion: -1 });
        res.status(200).json(projects);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete all projects
const deleteAllProjects = async (req, res) => {
    try {
        const result = await Project.deleteMany({});
        res.status(200).json({
            message: 'All projects deleted successfully',
            deletedCount: result.deletedCount
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET a single project
const getProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Project not found' });
    }

    const project = await Project.findById(id);

    if (!project) {
        return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json(project);
};

// create a new project
const createProject = async (req, res) => {
    const { title, firstname, lastname, email, completion, description } = req.body;

    try {
        const newProject = await Project.create({
            title,
            firstname,
            lastname,
            email,
            completion,
            description
        });
        res.status(200).json(newProject);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a project
const deleteProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Project not found' });
    }

    const project = await Project.findOneAndDelete({ _id: id });

    if (!project) {
        return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json({ message: 'Project deleted successfully' });
};

// update a project
const updateProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Project not found' });
    }

    const project = await Project.findOneAndUpdate(
        { _id: id },
        { ...req.body },
        { new: true }
    );

    if (!project) {
        return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json(project);
};

module.exports = {
    getAllProjects,
    deleteAllProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
};
