const express = require('express');

const router = express.Router();

const communityCtrl = require('./community-details.controller');

// router.get('/community-details', (req, res) => {
//   console.log("inside community details");
//   try {
//     return res.send(communityCtrl.GetCommunity());
//   } catch (err) {
//     return res.status(500).send({ error: 'Internal error occurred....!' });
//   }
// });
router.get('/community-details', (req, res) => { // eslint-disable-line consistent-return
  try {
    console.log('1.inside tools.....');
    communityCtrl.GetCommunity((err, result) => {
      if (err) {
        console.log('error');
        res.status(500).send({ error: 'Internal error occurred....!' });
      } else {
        console.log('got tool as : ', result);
        res.status(200).send(result);
      }
    });
  } catch (err) {
    console.log('catch ewrr');
    return res.status(500).send({
      error: 'Internal error occurred....!' });
  }
});
module.exports = router;

