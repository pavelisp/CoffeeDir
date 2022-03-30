const express = require('express');
const router = express.Router();
const User = require('../models/user');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res)=> {
  try {
      const { email } = req.user;
      
      const user = await User.findOne({ email })

      res.json({
          username: user.username,
          email: user.email,
          id: user._id
      });

  } catch (err) {
      console.log(err);
  }
})

module.exports = router;