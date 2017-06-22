const express = require('express');
const router = express.Router();
const communityCtrl= require('./community.controller');

router.get('/community', function(req,res){
    try{
   return res.send(communityCtrl.GetCommunity());

    }catch(err) {
         return res.status(500).send({error: 'Internal error occurred....!'});
    }
});
module.exports = router;