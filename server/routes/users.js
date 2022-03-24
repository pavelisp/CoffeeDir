const express = require('express');
const router = express.Router();

const User = require('../models/Users');

router.post('/', (req, res) => {
  const user = new User(req.body);

  user.save()
    .then(data => {
      res.status(200).json(data);
    }).catch(err => {
      res.status(400).json({ error: err });
    });
});

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
});

module.exports = router;