
const express = require('express');

const router = express.Router();

const communityService = require('./users.service');

router.patch('/:email', (req, res) => {
  try {
    const emailAddrs = req.params.email;
    const profileData = req.body;
    communityService.updateSpecificProfile(emailAddrs, profileData, (err) => {
      if (err) {
        return res.status(500).send({ error: 'Unexpected error occurred, try again later' });
      }
      return res.status(200).send({ message: 'Profile updated' });
    });
  } catch (err) {
    return res.status(500).send({ error: 'Unexpected error occurred, try again later' });
  }
});

router.get('/:username', (req, res) => {
  try {
    const emailAddrs = req.params.username;
    const profileData = req.body;
    communityService.getUserDetails(emailAddrs, (err, result) => {
      if (err) {
        console.log('Error in toolsCtrl.getTool, error: ', err);
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


module.exports = router;
