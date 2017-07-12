const express = require('express');
const router = express.Router();
const communityService = require('./users.service');


router.patch('/:email', (req, res) => {
  try {
    const emailAddrs = req.params.email;
    const profileData = req.body;
    communityService.updateSpecificProfile(emailAddrs, profileData, (err) => {
    if (err) {
      console.log('checking err in rputer');
        return res.status(500).send({ error: 'Unexpected error occurred, try again later' });
      }
      console.log('message:Profile updated');
      return res.status(200).send({message:'Profile updated'});
    });
  } catch (err) {
    return res.status(500).send({error: 'Unexpected error occurred, try again later' });
  }
});

router.get('/:username', (req, res) => {
  console.log("welcome to router");
  try {
    console.log("welcome to inside router");
     const emailAddrs = req.params.username;
    const profileData = req.body;
    communityService.getUserDetails(emailAddrs, (err, result) => {
      if (err) {
        console.log("Error in toolsCtrl.getTool, error: ", err);
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
