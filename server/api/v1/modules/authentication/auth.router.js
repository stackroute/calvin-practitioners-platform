const router = require('express').Router();
const authCtrl = require('./auth.controller');
const config = require('../common/config');

router.use((req, res, next) => {        // eslint-disable-line consistent-return
  try {
    const token = req.cookies.currentUser;
       // console.log('cookie', token);
       // to  decode token
    if (token) {
      authCtrl.verifyToken(token, (err) => {
        if (err) {
          res.clearCookie(config.cookie.user);
          res.clearCookie(config.cookie.userCommunity);
          res.status(401).json({ error: ' Session Timeout... Please login again' });
         // console.log('token expired');

         // res.redirect('/#/login');
        } else {
          next();
        }
               // console.log('Token verified');
               // res.cookie(config.cookie.name,successResult.authToken);
      });
    } else {
           // if there is no token
           // return an error
      return res.status(403).send({
        message: 'No token provided.',
      });
    }
  } catch (error) {
   // console.log(error);
    return error;
  }
});

module.exports = router;
