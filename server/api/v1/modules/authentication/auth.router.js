const router = require('express').Router();
const authCtrl = require('./auth.controller');

router.use((req, res, next) => {        // eslint-disable-line consistent-return
  try {
    const token = req.cookies.currentUser;
    if (token) {
      authCtrl.verifyToken(token, (err) => {
        if (err) {
          res.status(401);
          res.redirect('/#/login');
          return;
        }
        next();
             // console.log('Token verified');
                // res.cookie(config.cookie.name,successResult.authToken);
      });
    } else {
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
