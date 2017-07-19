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
    req.session.access_token = req.user.accessToken;
    res.redirect('/');
  });

// router.get('/auth/calendar',(req,res)=>{
     
//        try {

//             toolauthcontroller.getCalnderToken((err,result)=>{
                 
//                     if(err){

//                         console.log('error while authenticating',err);
//                       res.status(500).json({
//                           error:'Unable to authenticate'
//                       });      
//                 } else {

//                     res.status(200).
//                 }


                  
//             })
          
//        }

// });

// router.get('/auth/calendar/callback', 
//   passport.authenticate('google', { session: false, failureRedirect: '/login' }),
//   function(req, res) { 
//     req.session.access_token = req.user.accessToken;
//     res.redirect('/');
//   });

module.exports=router;