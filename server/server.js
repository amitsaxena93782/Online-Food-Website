const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

const cuisineRouter = require('./Routers/cuisineRouter');

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log('Middleware is running');
    next();
})

app.use('/cuisines', cuisineRouter);

app.get('/', (req, res) => {
    console.log('This is backend');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err.message);
    });


