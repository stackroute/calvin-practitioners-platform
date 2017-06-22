const router = require('express').Router();

const communityCtrl = require('./community.controller');// create Community

router.get('/', (req, res) => {
  try {
    return res.send(communityCtrl.getcommunity(req.query.domain));
  } catch (err) {
    return res.status(500).send({
      error: 'Internal error occurred....!' });
  }
});// get User community List
router.get('/userCommunities', (req, res) => {
  try {
    communityCtrl.getUserCommunity(req, res).then((successResult) => {
      return res.status(201).send(successResult);
    }, (errResult) => {
      // Log the error for internal use
      return res.status(500).send({
        errResult: 'Internal error occurred, please try later..!' });
    });
  } catch (error) {
    // Log the Error for internal use
    res.send({
      error: 'Failed to complete successfully, please check the request and try again..!' });
  }
});
module.exports = router;
