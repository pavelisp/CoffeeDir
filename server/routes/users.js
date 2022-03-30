const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const bcryptjs = require('bcryptjs');

// REGISTER NEW USER

router.post('/register', async (req, res) => {

  try {

      const { username, email, password } = req.body;

      if(!(username && email && password)) {
        return res.status(400).send('All fields are required');
      }

      const existingUser = await User.findOne({ email });

      if(existingUser) {
          return res.status(400).send("User already exists. Please login.")
      }

      encryptedPassword = await bcryptjs.hash(password, 10);

      // Create user in the database

      const user = await User.create({
          username, 
          email: email.toLowerCase(), 
          password: encryptedPassword,
      });

      // generate JWT token

      const token = jwt.sign(
          {user_id: user._id, email},
          process.env.TOKEN_KEY,
          {expiresIn: "24h"}
      );

      // save user token
      user.token = token;

      // return new user
      res.status(201).json(user);

  }  catch (err) {
      return res.status(500).send(err);
  }
});


// USER LOGIN

router.post('/login', async (req, res) => {
  try {
      const { email, password } = req.body;

      if(!(email && password)) {
          res.status(400).send("All inputs are required");
      }

      const user = await User.findOne({ email });

      if(user && (await bcryptjs.compare(password, user.password))) {
          
          // generate JWT token
          
          const token = jwt.sign(
              {user_id: user._id, email},
              process.env.TOKEN_KEY,
              {expiresIn: "24h"}
          );

          // respond with user
          return res.status(200).json({user, token});
      }
      return res.status(400).send("Invalid credentials.")

  } catch (err) {
      console.log(err);
  }
});

module.exports = router;