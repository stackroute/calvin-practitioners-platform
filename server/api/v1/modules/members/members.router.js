const express = require('express');

const router = express.Router();

const memberCtrl = require('./members.controller');


router.get('/members', (req, res) => {
  try {
        //  console.log('inside members');
         memberCtrl.getMembers(req.query.domain,(err,result) => {
             if(err)
             {
               res.status(500).send({ error: 'Internal error occurred....!' });
             } 
            else {
              res.status(200).send(result);
            } 
      });
    // return res.send((memberCtrl.getMembers(req.query.domain)));
  } catch (err) {
    return res.status(500).send({ error: 'Internal error occurred....!' });
  }
});

module.exports = router;
