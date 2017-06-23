const express = require('express');
const controller = require('./communityTools.controller');

const router = express.Router();
router.get('/', (request, response) => {
  try {
    return response.send(controller.retrieveAllTools(request.query.tools));
  } catch (err) {
    return response.status(500).send({
      error: 'Error in operation, please try later..!',
    });
  }
});

module.exports = router;
