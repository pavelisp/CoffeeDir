
const express = require('express');
const Coffee = require('../models/Coffees');


const router = express.Router();

// GET all coffees

router.get('/', (req, res) => {
  Coffee.find({}, (err, coffees) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(coffees);
    }
  });
});

// GET one coffee

router.get('/:id', (req, res) => {
  Coffee.findById(req.params.id, (err, coffee) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(coffee);
    }
  });
});

// POST a coffee and relate it to user by user_id

router.post('/:userId', (req, res) => {

  const { name, roaster, origin, farm, description, flavours, price, link, score } = req.body;

  const coffee = new Coffee(
    {
      name,
      roaster,
      origin,
      farm,
      description,
      flavours,
      price,
      link,
      score,
      user_id: req.params.userId
    }
  );

  coffee.save()
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(400).json({error: err});
  });
});

// EDIT a coffee

router.put('/:id', (req, res) => {
  Coffee.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, coffee) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(coffee);
    }
  });
});

// DELETE a coffee

router.delete('/:id', (req, res) => {
  Coffee.findByIdAndRemove(req.params.id, (err, coffee) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(coffee);
    }
  });
});

module.exports = router;