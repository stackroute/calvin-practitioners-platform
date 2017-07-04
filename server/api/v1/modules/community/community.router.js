const router = require('express').Router();
const communityCtrl = require('./community.controller');

// get User community List
router.get('/userCommunities', (req, res) => {
  try {
    communityCtrl.getUserCommunity(req, res).then(successResult =>
     // console.log('successResult', successResult);
     res.status(201).send(successResult));
  } catch (error) {
   // Log the Error for internal use
    res.send({
      error: 'Failed to complete successfully, please check the request and try again..!',
    });
  }
});

// post new community data
router.post('/:domainName', (req, res) => {
  try {
    communityCtrl.postNewcommunityDetails(req.params.domainName, req.body, (err, results) => {
      if (err) {
        return res.status(500).send({ error: 'Unexpected error occurred, try again later' });
      }
      return res.status(200).send(results);
    });
  } catch (err) {
    return res.status(500).send({ error: 'Unexpected error occurred, try again later' });
  }
  return 'passing';
});

module.exports = router;
