const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    rent: { type: Number, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' },
});

module.exports = mongoose.model('Property', propertySchema);
