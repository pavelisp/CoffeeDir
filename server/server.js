const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

// Middleware

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

// Import & setup routes

const coffeeRouter = require('./routes/coffees');
const userRouter = require('./routes/users');

app.use('/coffees', coffeeRouter);
app.use('/users', userRouter);

// Connect to MongoDB

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true}, ()=>{
    console.log('Connected to MongoDB');
});

// Run server

app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});