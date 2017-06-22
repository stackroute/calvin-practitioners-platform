
const jwt = require('jsonwebtoken-refresh');
const config = require('../common/config');

const verifyToken = (usertoken, done) => {
        // console.log('inside verify token');
  jwt.verify(usertoken, config.appConstants.secret, (err) => {
            // console.log('decoded string',decoded);
    if (err) {
      return done(err);
    }
    else {
    return done(null, usertoken);
    }
  });
};

module.exports = {
  verifyToken,
};
