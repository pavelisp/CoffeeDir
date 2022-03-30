const express = require('express');
const app = express();
require('./config/database').connect();
const morgan = require('morgan');
const cors = require('cors');

const userRoutes = require('./routes/users');
const currentUser = require('./routes/current');
const coffeeRoutes = require('./routes/coffees');

// Environmental variables

require('dotenv').config();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());


// Routes
app.use('/user', userRoutes);
app.use('/current', currentUser);
app.use('/coffee', coffeeRoutes);

app.listen(PORT, () => {
    console.log('Server running on port 8080');
});