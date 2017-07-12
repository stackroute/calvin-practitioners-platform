const router = require('express').Router();
const memberCtrl = require('./community-member.controller.js');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/communitymembership/:domain/members', (req, res) => {
  try {
    console.log('Domain is: ', req.params.domain);
    memberCtrl.getCommunityMembers(req.params.domain, (err, result) => {
      if (err) {
        return res.status(500).send({ error: 'Error in getting values, please try later..!' });
      }
      return res.status(200).send(result);
    });
  } catch (err) {
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


router.delete('/communitymembership/:domain/members',(req, res) => {
  console.log("dadaddddada",req.params.domain);
  console.log("LOOK HERE----->",req.body.params);
  try {
    memberCtrl.deleteMembers(req.params.domain,req.body, (err, result) => {
      if (err) {
        res.status(500).send({ error: 'SOMETHING HAPPENED' });
      } 
        return res.status(200).send(result);
    });
  } catch (err) {
    return res.status(500).send({ error: 'Internal error occurred....!' });
  }
  return true;
});
module.exports = router;