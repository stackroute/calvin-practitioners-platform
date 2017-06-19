// const router = require('express').Router();
// const controller = require('./login-controller');
// const passport = require('passport');

// // router.get('/app/home',(req,res)=>{
// // });
// router.get('/logout', (req, res) => {
//   // console.log('logout called');
//   res.clearCookie('currentUser');
//   res.redirect('/');
// });

// router.get('/auth/google',

// router.get('/auth/google/callback', (req, res, next) => {
//   controller.generateToken(req, res, next).then((result) => {
//     res.cookie('currentUser', result);
//     res.redirect('/#/app/home');
//     // res.send(200);
//   }, (err) => {
//     res.send(err);
//   });
// });

// module.exports = router;
