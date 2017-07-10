const express = require('express');
const controller = require('./communityroleactions.controller.js');

const router = express.Router();
router.get('/:domainname', (request, response) => {
console.log(request.params.domainname);
console.log(request.query.onlyroles);
  try {    
     controller.retrieveAllRoles(request.params.domainname, (err, result) => {
      if (err) {
        console.log("dsvs");

        response.status(500).send({ error: 'Error in getting community details, please try later..!' });
      } else {
        console.log("dvsdvsdvdsvdg");

        response.status(200).send(result);
      }
    });
  } catch (err) {
    return response.status(500).send({ error: 'Error in operation, please try later..!' });
  }
});


console.log("dsf");
router.get('/communityrole/:domainName', (request, response) => {
console.log(request.params.domainName);
  try {    
     controller.retrieveAllUsers(request.params.domainName, (err, result) => {
      if (err) {
        console.log("dsvs");

        response.status(500).send({ error: 'Error in getting community details, please try later..!' });
      } else {
        console.log("dsfdsdsff");

        response.status(200).send(result);
      }
    });
  } catch (err) {
    return response.status(500).send({ error: 'Error in operation, please try later..!' });
  }
});



router.patch('/communityrole/:domainname/roles/:rolename', (req, res) => {
  try {
    communityCtrl.updateActions(req.params.domainname,req.params.rolename, req.body, (err, result) => {
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

module.exports = router;
