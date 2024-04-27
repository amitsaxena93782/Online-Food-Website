const { getCuisines } = require('../Controllers/cuisineController');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World');
})

router.get('/getList', getCuisines)

module.exports = router;