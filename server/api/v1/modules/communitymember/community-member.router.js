const router = require('express').Router();
const memberCtrl = require('./community-member.controller.js');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/communityinvite/:domain', (req, res)=>{
  console.log("Domain name", req.params.domain);
  return res.status(200).send(res);
})

//  Send invitation to member
router.post('/memberrequests/:domain/type/:type', (req, res) => {
  try {
    memberCtrl.postMemberInvite(req, req.params.domain, req.params.type, req.body, (err, result) => {
      // console.log("url is:",req);
      if (err) {
        return res.status(500).send({ error: 'Error in getting values, please try later..!' });
      }
      return res.status(200).send(result);
    });
  } catch (err) {
    return res.status(500).send({ error: 'Unexpected internal error occurred...!' });
  }
});
router.post('/communitymembership/:domain/members', (req, res) => {
 try {
    memberCtrl.postMember(req.params.domain, req.body, (err, result) => {
      if (err) {
        return res.status(500).send({ error: 'Error in getting values, please try later..!' });
      }
      return res.status(200).send(result);
    });
  } catch (err) {
    return res.status(500).send({ error: 'Unexpected internal error occurred...!' });
  }
});

router.get('/communitymembership/:domain/members', (req, res) => {
  try {
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


router.delete('/communitymembership/:domain/members', (req, res) => {
  try {
    memberCtrl.deleteMember(req.params.domain, req.body, (err, result) => {
      if (err) {
        return res.status(500).send({ error: 'Error in getting value' });
      }
      return res.status(200).send(result);
    });
  } catch (err) {
    return res.status(500).send({ error: 'Internal error occurred....!' });
  }
  return true;
});
 
 router.patch('/memberrequests/invite/:domain/person/:person/:role', (req, res) => {
  try {
   console.log(req.params.domain,"domain name");
   console.log(req.params.person,"sgwrgwrgwrgrew");
   
    memberCtrl.updateMember(req.params.domain,req.params.person, req.params.role, (err, result) => {
      if (err) {
        return res.status(500).send({ error: 'Unexpected error occurred, try again later' });
      }
      return res.status(200).send(result);
    });
  } catch (err) {
    return res.status(500).send({
      error: 'Unexpected error occurred, try again later' });
  }
});
router.post('/communitymembership/:domain/members', (req, res) => {
 try {
    memberCtrl.addNewMember(req.params.domain, req.body, (err, result) => {
      if (err) {
        return res.status(500).send({ error: 'Error in getting values, please try later..!' });
      }
      return res.status(200).send(result);
    });
  } catch (err) {
    return res.status(500).send({ error: 'Unexpected internal error occurred...!' });
  }
});

router.delete('/memberrequests/:domain/person/:person', (req, res) => {
  try {
    memberCtrl.deleteRequest(req.params.domain, req.params.person, (err, result) => {
      if (err) {
        return res.status(500).send({ error: 'Error in getting value' });
      }
      return res.status(200).send(result);
    });
  } catch (err) {
    return res.status(500).send({ error: 'Internal error occurred....!' });
  }
  return true;
});

module.exports = router;
