const express = require('express');
const controller = require('./communitytools.controller.js');

const router = express.Router();

router.get('/:domainname', (request, response) => {
  console.log(request.params.domainname);

  try {
    controller.retrieveAllTools(request.params.domainname, (err, result) => {
      if (err) {
        console.log('dsvs');

        response.status(500).send({ error: 'Error in getting community details, please try later..!' });
      } else {
        console.log('dvsdvsdvdsvdg');

        response.status(200).send(result);
      }
    });
  } catch (err) {
    return response.status(500).send({ error: 'Error in operation, please try later..!' });
  }
});


// module.exports = router;

// const router = require('express').Router();
// const toolsCtrl = require('./tools.controller.js');

router.get('/:domainname/', (req, res) => {
  // console.log("welcome to router");
  try {
    // console.log("welcome to router");
    toolsCtrl.getTool(req.params.domain, (err, result) => {
      if (err) {
        // console.log("Error in toolsCtrl.getTool, error: ", err);
        res.status(500).send({ error: 'Internal error occurred....!' });
      } else {
        res.status(200).send(result);
      }
      return true;
    });
  } catch (err) {
    return res.status(500).send({
      error: 'Internal error occurred....!' });
  }
  return true;
});

module.exports = router;
