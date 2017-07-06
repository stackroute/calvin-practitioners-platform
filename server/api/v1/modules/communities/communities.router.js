const express = require('express');

const router = express.Router();

const communityCtrl = require('./communities.controller');

router.get('/communities/:domain', (req, res) => { // eslint-disable-line consistent-return
  try {
    communityCtrl.getSpecificCommunity(req.params.domain, (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Error in getting community details, please try later..!' });
      } else {
        res.status(200).send(result);
      }
    });
  } catch (err) {
    return res.status(500).send({
      error: 'Internal error occurred....!' });
  }
});

router.patch('/communities/:domain', (req, res) => {
 try {
   communityCtrl.patchSpecificCommunity(req.params.domain, req.body, (err, results) => {
     if (err) {
      console.log('error in server side');
       return res.status(500).send({ error: 'Unexpected error occurred, try again later' });
       
     }
     return res.status(200).send(results);
   });
 } catch (err) {
         console.log('error in server side');

   return res.status(500).send({ error: 'Unexpected error occurred, try again later' });
 }
});


// const router = require('express').Router();
// const templateCtrl = require('./communityTemplates.controller.js');
// /**
// * Returns list of community Templates
// *
// * Takes optional query parameter purpose
// */
// router.get('/', (req, res) => {
//  try {
//    templateCtrl.getAllCommunityTemplates(req.query.purpose, (err, result) => {
//      if (err) {
//        return res.status(500).send({ error: 'Error in getting templates, please try later..!' });
//      }
//      return res.status(200).send(result);
//    });
//  } catch (err) {
//    return res.status(500).send({ error: 'Unexpected internal error occurred...!' });
//  }
//  // return res.status(200).send(res);
// });

module.exports = router;

