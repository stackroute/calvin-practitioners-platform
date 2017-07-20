const express = require('express');

const router = express.Router();

const communityCtrl = require('./communities.controller');

router.get('/communities/:domain', (req, res) => { // eslint-disable-line consistent-return
  try {
    communityCtrl.getSpecificCommunity(req.params.domain,req.query.counter, (err, result) => {
      if (err) {
        // console.log("checking for counter",err);
        res.status(500).send({ error: 'Error in getting community details, please try later..!' });
      } else {
        res.status(200).send(result);
      }
    });
  } catch (err) {
    //  console.log("checking for counter in error",err);
    return res.status(500).send({
      error: 'Internal error occurred....!' });
  }
});

router.patch('/communities/:domain', (req, res) => {
  try {
    //console.log('1.inside communities patch.....');
    communityCtrl.updateSpecificCommunity(req.params.domain, req.body, (err, result) => {
      if (err) {
        return res.status(500).send({ error: 'Unexpected error occurred, try again later' });
      }
      //console.log('got patch as : ', result);
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

// router.get('/membership/:member/', (req, res) => { // eslint-disable-line consistent-return
//   try {
//     //console.log('1.insoide gettong communities for a user.....');
//     communityCtrl.getUserCommunity(req.params.member, (err, result) => {
//       if (err) {
//         res.status(500).send({ error: 'Error in getting community details, please try later..!' });
//       } else {
//        // console.log('got  communities of user as : ', result);
//         res.status(200).send(result);
//       }
//     });
//   } catch (err) {
//     //console.log('got error communities of user as : ', err);
//     return res.status(500).send({
//       error: 'Internal error occurred....!' });
//   }
// });

//post new community data
router.post('/:domainName', (req, res) => {
  try {
    communityCtrl.postNewcommunityDetails(req.params.domainName, req.body, (err, results) => {
      if (err) {
        return res.status(500).send({ error: 'Unexpected errorsss occurred, try again later' });
      }
      return res.status(200).send(results);
    });
  } catch (err) {
    return res.status(500).send({ error: 'Unexpected error occurred, try again later' });
  }
});

module.exports = router;

