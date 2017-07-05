const router = require('express').Router();
const communityCtrl = require('./community.controller');

// get User community List
router.get('/userCommunities', (req, res) => {
  try {

    communityCtrl.getUserCommunity(req, (err, results) => {
      if (err) {
        return res.status(500).send({ error: 'Unexpected error occurred, try again later' });
      }
      return res.status(200).send(results);
    });
  } catch (err) {
    return res.status(500).send({ error: 'Unexpected error occurred, try again later' });
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
});

module.exports = router;
