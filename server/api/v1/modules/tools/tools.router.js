const router = require('express').Router();
const toolsCtrl = require('./tools.controller');

router.get('/tools', (req, res) => {
  try {
    return res.send(toolsCtrl.getTool(req.query.domain));
  } catch (err) {
    return res.status(500).send({
      error: 'Internal error occurred....!' });
  }
});

module.exports = router;
