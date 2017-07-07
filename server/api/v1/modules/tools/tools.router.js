const router = require('express').Router();
const toolsCtrl = require('./tools.controller.js');

router.get('/communitytools/:domain/tools', (req, res) => {
  //console.log("welcome to router");
  try {
    // console.log("welcome to router");
    toolsCtrl.getTool(req.params.domain, (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Internal error occurred....!' });
      } else {
        res.status(200).send(result);
      }
      return true;
    });
  } catch (err) {
    return res.status(500).send({
      error: 'Internal error occurred....!'
    });
  }
  return true;
});

module.exports = router;
