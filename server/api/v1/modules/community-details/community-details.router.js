const express = require('express');

const router = express.Router();

const communityCtrl = require('./community-details.controller');

router.get('/community-details/:domain', (req, res) => { // eslint-disable-line consistent-return
  try {
    communityCtrl.GetSpecificCommunity(req.params.domain, (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Internal error occurred....!' });
      } else {
        res.status(200).send(result);
      }
    });
  } catch (err) {
    return res.status(500).send({
      error: 'Internal error occurred....!' });
  }
});

// router.get('/community-details', (req, res) => { // eslint-disable-line consistent-return
//   try {
//     communityCtrl.GetCommunity((err, result) => {
//       if (err) {
//         res.status(500).send({ error: 'Internal error occurred....!' });
//       } else {
//         res.status(200).send(result);
//       }
//     });
//   } catch (err) {
//     return res.status(500).send({
//       error: 'Internal error occurred....!' });
//   }
// });

module.exports = router;

