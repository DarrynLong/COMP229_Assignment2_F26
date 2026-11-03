// contact_controller.js - controller for handling contact-related requests
// Author: Darryn
// Centennial College - Fall 2026

//=============================================================
//                          IMPORTS
//=============================================================

// import the contact model
const Contact = require('../models/contact_model');
const mongoose = require('mongoose');


//=============================================================
//                      REQUEST HANDLERS
//=============================================================

// GET all contacts
const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({}).sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete all contacts
const deleteAllContacts = async (req, res) => {
    try {
        const result = await Contact.deleteMany({});
        res.status(200).json({
            message: 'All contacts deleted successfully',
            deletedCount: result.deletedCount
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET a single contact
const getContact = async (req, res) => {

    // destructure the request params to get the contact id
    const { id } = req.params;

    // check if the id is a valid mongoose ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Contact not found' });
    }

    // find the contact by id
    const contact = await Contact.findById(id);

    // check if the contact exists
    if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
    }

    res.status(200).json(contact);

}

// create a new contact
const createContact = async (req, res) => {

    // destructure the request body to get the contact details
    const { firstname, lastname, email } = req.body;

    // create a new contact document in database
    try {   
        const newContact = await Contact.create({ firstname, lastname, email });
        res.status(200).json(newContact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete a contact
const deleteContact = async (req, res) => {
    
    // destructure the request params to get the contact id
    const { id } = req.params;

    // check if the id is a valid mongoose ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Contact not found' });
    }

    // find the contact by id and delete it
    const contact = await Contact.findOneAndDelete({ _id: id });

    // check if the contact exists
    if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
    }

    res.status(200).json({ message: 'Contact deleted successfully' });
}

// update a contact
const updateContact = async (req, res) => {

    // destructure the request params to get the contact id
    const { id } = req.params;

    // check if the id is a valid mongoose ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Contact not found' });
    }

    // find the contact by id and update it
    const contact = await Contact.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });

    // check if the contact exists
    if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
    }

    res.status(200).json(contact);
}

module.exports = {
    getAllContacts,
    deleteAllContacts,
    getContact,
    createContact,
    deleteContact,
    updateContact,
};