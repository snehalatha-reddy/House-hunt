const express = require('express');
const Property = require('../models/Property');
const router = express.Router();

// Create Property
router.post('/', async (req, res) => {
    const property = new Property(req.body);
    await property.save();
    res.status(201).json(property);
});

// Get Properties
router.get('/', async (req, res) => {
    const properties = await Property.find();
    res.json(properties);
});

module.exports = router;
