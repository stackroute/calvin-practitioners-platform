const express = require('express');
const passport = require('passport');
const router = express.Router();
const toolauthcontroller=require('./toolauth.controller');
// const passport='';
// router.get('/auth/calander',(req,res)=>{
require('./tools/calendar/calendar.js')(passport);
router.use(passport.initialize());
// router.use(passport.session()); // persistent login sessions

router.get('/auth/calendar',passport.authenticate('google-calendar', { session: false }));

router.get('/auth/calendar/callback', 
  passport.authenticate('google-calendar', { session: false, failureRedirect: '/login' }),
  function(req, res) { 
    // req.session.access_token = req.user.accessToken;
    res.redirect('/');
  });

router.get('/:toolid/:username/token',(req,res)=>{

      try{

            toolauthcontroller.getToolToken(req.params.toolid,req.params.username,(err,result)=>{

                if(err){
               return    res.status(500).send('internal Server Error.. Unable to fetch toolinfo ');
                }
                   return res.send(result);
            })
             
      } catch(err){
             res.status(500).send('Unexpected internal Server Error.. ');
      }
});

module.exports=router;