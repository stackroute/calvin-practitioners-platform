const express = require('express');
const controller = require('./communityTools.controller');

const router = express.Router();
router.get('/', (request, response) => {
  try {
    return response.send(controller.retrieveAllTools('medical'));
  } catch (err) {
    return response.status(500).send({
      error: 'Error in operation, please try later..!',
    });
  }
});

router.patch('/',(request,response)=>{
  try{
    return response.send(controller.updateToolActions('medical'));
  }
  catch(err)
  {
    return response.status(500).send({
      error:'Error in operation,please try later..!',
    });
  }
});

module.exports = router;
