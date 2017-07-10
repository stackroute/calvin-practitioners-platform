const router = require('express').Router();
const memberCtrl = require('./community-member.controller.js');

router.get('/communitymembership/:domain/members', (req, res) => {
  try {
    console.log('Domain is: ', req.params.domain);
    memberCtrl.getCommunityMembers(req.params.domain, (err, result) => {
      if (err) {
        // console.log('Error: ', err);
        return res.status(500).send({ error: 'Error in getting values, please try later..!' });
      }
      return res.status(200).send(result);
    });
  } catch (err) {
    // console.log('Unexpected exception in templateCtrl.getAllCommunityTemplates, error: ', err);
    return res.status(500).send({ error: 'Unexpected internal error occurred...!' });
  }
});

router.get('/members', (req, res) => {
  try {
    memberCtrl.getMembers(req.query.domain, (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Internal error occurred....!' });
      } else {
        return res.status(200).send(result);
      }

      return true;
    });
  } catch (err) {
    return res.status(500).send({ error: 'Internal error occurred....!' });
  }
  return true;
});



router.get('/memberrequests/:domain', (req, res) => {
  try {
    console.log('Domain is: ', req.params.domain);
    memberCtrl.postMemberInvite(req.params.domain, (err, result) => {
      if (err) {
        return res.status(500).send({ error: 'Error in getting values, please try later..!' });
      }
      return res.status(200).send(result);
    });
  } catch (err) {
    return res.status(500).send({ error: 'Unexpected internal error occurred...!' });
  }
});
module.exports = router;
