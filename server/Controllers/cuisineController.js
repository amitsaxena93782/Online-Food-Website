const Cuisine = require('../Models/cuisineModel');

const getCuisines = async (req,res) => {
    try {
        const cuisines = await Cuisine.find({});
        res.json(cuisines);
    }
    catch (err) {
        res.status(400).json({message: err.message});
    }
}

module.exports = {getCuisines};