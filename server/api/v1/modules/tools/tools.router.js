const router = require('express').Router();
const toolsCtrl = require('./tools.controller');

router.get('/tools', (req, res) => {
  try {
    toolsCtrl.getTool(req.query.domain, (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Internal error occurred....!' });
      } else {
        res.status(200).send(result);
      }
    });
  } catch (err) {
    return res.status(500).send({
      error: 'Internal error occurred....!'
    });
  }
});

module.exports = router;