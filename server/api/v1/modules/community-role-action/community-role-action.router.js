const express = require('express');
const controller = require('./community-role-action.controller');

const router = express.Router();
router.get('/roles', (request, response) => {
  try {
    return response.send(controller.retrieveAllUsers(request.query.domain));
  } catch (err) {
    return response.status(500).send({ error: 'Error in operation, please try later..!' });
  }
});

module.exports = router;
