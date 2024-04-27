const mongoose = require('mongoose');

const cuisineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

const Cuisine = mongoose.model('Cuisine', cuisineSchema);

module.exports = Cuisine;