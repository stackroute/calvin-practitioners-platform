const router = require('express').Router();
const memberCtrl = require('./member-invite.controller.js');

router.get('/memberrequests/:domain', (req, res) => {
  try {
    console.log("Domain is: ", req.params.domain);
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