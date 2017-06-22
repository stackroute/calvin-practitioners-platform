const express = require('express');

const router = express.Router();

const controller = require('./activity-page.controller');

router.get('/active', (req, res) => {
  try {
    return res.send(controller.retrieveAllPosters(req.query.domain));
  } catch (err) {
    return res.status(500).send({ error: 'Internal error occured....!' });
  }
});
module.exports = router;
