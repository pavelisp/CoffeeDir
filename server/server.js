const express = require('express');
const app = express();
require('./config/database').connect();
const morgan = require('morgan');
const auth = require('./middleware/auth');

const userRoutes = require('./routes/users');


// Environmental variables

require('dotenv').config();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use('/user', userRoutes);

app.get('/potato', auth, (req, res)=> {
    res.send('hi');
})



app.listen(PORT, () => {
    console.log('Server running on port 8080');
});