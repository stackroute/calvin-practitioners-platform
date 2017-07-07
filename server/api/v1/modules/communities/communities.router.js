const express = require('express');

const router = express.Router();

const communityCtrl = require('./communities.controller');

router.get('/communities/:domain/', (req, res) => { // eslint-disable-line consistent-return
  try {
    communityCtrl.getSpecificCommunity(req.params.domain, (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Error in getting community details, please try later..!' });
      } else {
        res.status(200).send(result);
      }
    });
  } catch (err) {
    return res.status(500).send({
      error: 'Internal error occurred....!' });
  }
});

router.patch('/communities/:domain', (req, res) => {
  try {
    communityCtrl.updateSpecificCommunity(req.params.domain,  req.body, (err, result) => {
      if (err) {
        return res.status(500).send({ error: 'Unexpected error occurred, try again later' });
      }
      return res.status(200).send(result);
    });
  } catch (err) {
    return res.status(500).send({
      error: 'Unexpected error occurred, try again later' });
  }
});

module.exports = router;

