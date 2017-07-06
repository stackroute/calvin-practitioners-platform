const express = require('express');
const controller = require('./communityRoles.controller');

const router = express.Router();
router.get('/:domain', (request, response) => {
  try {
    return response.send(controller.retrieveAllUsers('technology'));
  } catch (err) {
    return response.status(500).send({ error: 'Error in operation, please try later..!' });
  }
});
router.patch('/', (request, response) => {    
  try {
const data=request.body;
console.log(request.body,"dvd");
     controller.update(data, (err) => {
      if (err) {
        return response.status(500).send({ error: 'Error in operation, please try later..!' });
      }
      return response.send('Updated');
    });
  } catch (err) {
    return response.status(500).send({ error: 'Error in operation, please try later..!' });
  }
});

module.exports = router;
