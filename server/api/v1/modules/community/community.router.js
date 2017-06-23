const router = require('express').Router();
const communityCtrl = require('./community.controller');
// create Community
router.get('/', (req, res) => {
  try {
    return res.send(communityCtrl.getcommunity(req.query.domain));
  } catch (err) {
    return res.status(500).send({
      error: 'Internal error occurred....!',
    });
  }
});

// get User community List
router.get('/userCommunities', (req, res) => {
  return res.send(communityCtrl.getUserCommunity(req, res));
});

// get Community
router.get('/getcom', communityCtrl.getcommunity);
module.exports = router;
