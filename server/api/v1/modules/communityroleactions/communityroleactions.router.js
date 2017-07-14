const express = require('express');
const controller = require('./communityroleactions.controller.js');

const router = express.Router();
router.get('/:domainname', (request, response) => {
  // console.log(request.params.domainname);
  // console.log(request.query.onlyroles);
  try {
    controller.retrieveAllRoles(request.params.domainname, (err, result) => {
      if (err) {
        // console.log('dsvs');

        response.status(500).send({ error: 'Error in getting community details, please try later..!' });
      } else {
        // console.log('dvsdvsdvdsvdg');

        response.status(200).send(result);
      }
    });
  } catch (err) {
    return response.status(500).send({ error: 'Error in operation, please try later..!' });
  }
});


router.get('/communityrole/:domainName', (request, response) => {
  // console.log(request.params.domainName);
  try {
    controller.retrieveAllUsers(request.params.domainName, (err, result) => {
      if (err) {
        response.status(500).send({ error: 'Error in getting community details, please try later..!' });
      } else {
        response.status(200).send(result);
      }
    });
  } catch (err) {
    return response.status(500).send({ error: 'Error in operation, please try later..!' });
  }
});


router.patch('/communityrole/:domainname/roles/:rolename', (req, res) => {
  try {
    // console.log(req.params.domainname);
    // console.log(req.params.rolename);
    // console.log(req.body);
    controller.updateActions(req.params.domainname, req.params.rolename, req.body, (err, result) => {
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


router.post('/communityrole/:domainName', (req, res) => {
  try {
    // console.log(req.params.domainName,"sgsgd");
    // console.log(req.body);
    controller.createRole(req.params.domainName, req.body, (err, result) => {
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
