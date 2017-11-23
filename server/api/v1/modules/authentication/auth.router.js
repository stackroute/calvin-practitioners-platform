const router = require('express').Router();
const authCtrl = require('./auth.controller');
const config = require('../../../../appconfig/env/dev');

router.use((req, res, next) => {        // eslint-disable-line consistent-return
  try {
    const token = req.cookies.currentUser;
       // console.log('cookie', token);
       // to  decode token
    if (token) {
      authCtrl.verifyToken(token, (err, decoded) => {
        if (err) {
          res.clearCookie(config.cookies.user);
          res.clearCookie(config.cookies.userCommunity);
          res.status(401).json({ error: ' Session Timeout... Please login again' });
         // console.log('token expired');

         // res.redirect('/#/login');
        } else {
          req.user = decoded;
          next();
        }
               // console.log('Token verified');
               // res.cookie(config.cookie.name,successResult.authToken);
      });
    } else {
           // if there is no token
           // return an error
      return res.status(403).send({
        message: 'User not authenticated.',
      });
    }
  } catch (error) {
   // console.log(error);
    return error;
  }
});

module.exports = router;
