const express = require('express');

const router = express.Router();

const controller = require('./communityactivityevents.controller');

router.get('/', (req, res) => {
  try {
    controller.getEvents((err, result) => {
      if (err) {
        res.status(500).send({ error: 'Error in getting community details, please try later..!' });
      } else {
        res.status(200).send(result);
      }
    });
  } catch (err) {
    console.log("inside route error", err)
    return res.status(500).send({error: 'Internal error occurred....!' });
  }
});

module.exports = router;
