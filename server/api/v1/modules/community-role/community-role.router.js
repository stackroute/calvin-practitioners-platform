const router = require('express').Router();
const rolelist = require('./community-role.controller.js');

router.get('/communityrole/:domainName?onlyroles=true', (req, res) => {
  try {
      console.log("role is: ", req.params.domain);
    rolelist.getRole(req.params.domain, (err, result) => {
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

module.exports = router;