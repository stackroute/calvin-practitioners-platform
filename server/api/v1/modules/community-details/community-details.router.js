const express = require('express');
const router = express.Router();
const communityCtrl= require('./community-details.controller');

router.get('/community-details', function(req,res){
    try{
   return res.send(communityCtrl.GetCommunity());

    }catch(err) {
         return res.status(500).send({error: 'Internal error occurred....!'});
    }
});
// module.exports = router;
// const router = require('express').Router();
// const communityCtrl = require('./community.controller');

// // get User community List
// router.get('/userCommunities', (req, res) => {
//   try {
//     //communityCtrl.getUserCommunity(req, res);
//     communityCtrl.getUserCommunity(req, res).then((successResult) => {
//       console.log("successResult", successResult);
//       return res.status(201).send(successResult);
//     }, (errResult) => {
//       // Log the error for internal use
//       return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
//     });
//   } catch (error) {
//     // Log the Error for internal use
//     res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
//     return;
//   }

// });


// // get Community
// router.get('/getcom', communityCtrl.getcommunity);
module.exports = router;

