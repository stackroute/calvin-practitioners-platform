const express = require('express');

const router = express.Router();

const memberCtrl = require('./members.controller');

// router.get('/members', memberCtrl.getMembers);

router.get('/members', (req, res) => {
  try {
    return res.send(memberCtrl.getMembers(req.query.domain));
  } catch (err) {
    return res.status(500).send({ error: 'Internal error occurred....!' });
  }
});
module.exports = router;
