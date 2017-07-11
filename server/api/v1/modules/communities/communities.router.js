const express = require('express');

const router = express.Router();

const communityCtrl = require('./communities.controller');
// check domain is avialable or not
router.get('/:domain', (req, res) => { // eslint-disable-line consistent-return
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
    communityCtrl.updateSpecificCommunity(req.params.domain, req.body, (err, result) => {
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

router.get('/community-details', (req, res) => { // eslint-disable-line consistent-return
  try {
    // console.log('1.inside tools.....');
    communityCtrl.GetCommunity((err, result) => {
      if (err) {
        // console.log('error');
        res.status(500).send({ error: 'Internal error occurred....!' });
      } else {
        // console.log('got tool as : ', result);
        res.status(200).send(result);
      }
    });
  } catch (err) {
    // console.log('catch ewrr');
    return res.status(500).send({
      error: 'Internal error occurred....!' });
  }
});

module.exports = router;

