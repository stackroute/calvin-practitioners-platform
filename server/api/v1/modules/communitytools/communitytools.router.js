const express = require('express');
const controller = require('./communitytools.controller.js');

const router = express.Router();

router.get('/:domainname', (request, response) => {
  try {
    controller.retrieveAllTools(request.params.domainname, (err, result) => {
      if (err) {
        //console.log('dsvs');

        response.status(500).send({ error: 'Error in getting community details, please try later..!' });
      } else {
        //console.log('dvsdvsdvdsvdg');

        response.status(200).send(result);
      }
    });
  } catch (err) {
    return response.status(500).send({ error: 'Error in operation, please try later..!' });
  }
});


// module.exports = router;

// const router = require('express').Router();
// const toolsCtrl = require('./tools.controller.js');

// router.get('/:domainname', (req, res) => {
//   // console.log("welcome to router");
//   try {
//     // console.log("welcome to router");
//     controller.getTool(req.params.domain, (err, result) => {
//       if (err) {
//         // console.log("Error in toolsCtrl.getTool, error: ", err);
//         res.status(500).send({ error: 'Internal error occurred....!' });
//       } else {
//         res.status(200).send(result);
//       }
//       return true;
//     });
//   } catch (err) {
//     return res.status(500).send({
//       error: 'Internal error occurred....!' });
//   }
//   return true;
// });


router.post('/:domain/tool',(req, res) => {
   try{
     console.log('api is data',req.params.domain,req.body);
     controller.postTool(req.params.domain, req.body,(err, result) => {
       if (err) {
         res.status(500).send({error: 'Internal error ocurred...!!!'});
       } else{
         res.status(200).send(result);
       }
       return true;
     });
   }catch (err){

     return res.status(500).send({
       error: 'Internal error occurred..!!!' })
   }
   return true;

});

router.post('/:domain',(req, res) => {
   try{
     console.log('api is data',req.params.domain);
     controller.postToolInfo(req.params.domain, req.body,(err, result) => {
       if (err) {
         res.status(500).send({error: 'Internal error ocurred...!!!'});
       } else{
         res.status(200).send(result);
       }
       return true;
     });
   }catch (err){

     return res.status(500).send({
       error: 'Internal error occurred..!!!' })
   }
   return true;

});


module.exports = router;



