const express = require('express');

const router = express.Router();

const memberCtrl = require('./members.controller.js');

router.get('/communitymembership/:domain/members', (req, res) => {
  try {
    memberCtrl.getMembers(req.params.domain, (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Internal error occurred....!' });
      } else {
        return res.status(200).send(result);
      }
        return true;
    });
  } catch (err) {
    return res.status(500).send({ error: 'Internal error occurred....!' });
  }
  return true;
});

module.exports = router;
