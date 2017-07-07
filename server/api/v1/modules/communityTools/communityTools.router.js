const express = require('express');
const controller = require('./communityTools.controller.js');

const router = express.Router();

router.get('/:domainname', (request, response) => {
console.log(request.params.domainname);

  try {    
     controller.retrieveAllTools(request.params.domainname, (err, result) => {
      if (err) {
        console.log("dsvs");

        response.status(500).send({ error: 'Error in getting community details, please try later..!' });
      } else {
        console.log("dvsdvsdvdsvdg");

        response.status(200).send(result);
      }
    });
  } catch (err) {
    return response.status(500).send({ error: 'Error in operation, please try later..!' });
  }
});




module.exports = router;
