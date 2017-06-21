  const router = require('express').Router();

  const communityCtrl = require('./community.controller');

  router.get('/', (req, res) => {
    try {
      return res.send(communityCtrl.getcommunity(req.query.domain));
    } catch (err) {
      return res.status(500).send({ error: 'Internal error occurred....!' });
    }
  });

  module.exports = router;

