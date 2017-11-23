const jwt = require('jsonwebtoken-refresh');
const config = require('../../../../appconfig/env/dev');

const verifyToken = (usertoken, done) => {
  jwt.verify(usertoken, config.appConstants.secret, (err, res) => {
    if (err) {
      return done(err);
    }
    return done(null, res);
  });
};

module.exports = {
  verifyToken,
};
