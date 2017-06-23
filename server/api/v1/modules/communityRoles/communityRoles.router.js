const express = require('express');
const controller = require('./communityRoles.controller');

const router = express.Router();
router.get('/', (request, response) => {
  try {
    return response.send(controller.retrieveAllUsers(request.query.domain));
  } catch (err) {
    return response.status(500).send({ error: 'Error in operation, please try later..!' });
  }
});

module.exports = router;
