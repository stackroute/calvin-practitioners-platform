const express = require('express');
const controller = require('./community-tool-actions.controller');

const router = express.Router();
router.get('/tools', (request, response) => {
  try {
    return response.send(controller.retrieveAllTools(request.query.tools));
  } catch (err) {
    return response.status(500).send({
      error: 'Error in operation, please try later..!',
    });
  }
});

module.exports = router;
