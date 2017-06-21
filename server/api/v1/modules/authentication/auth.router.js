const router = require('express').Router();
const authCtrl = require('./auth.controller');

router.use((req, res, next) => {
  try {
    const token = req.cookies.currentUser;
    // console.log('cookie', token);
        // to  decode token
    if (token) {
      authCtrl.verifyToken(token, (err) => {
        if (err) {
        //   console.log('Internal error occurred', err);
          return res.status(500).send({ error: 'Internal error occurred, please try later..!', message: 'UnAuthorised User' });
        }

                 // console.log('Token verified');
                // res.cookie(config.cookie.name,successResult.authToken);
        next();
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
