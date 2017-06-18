const passport = require('passport');

const generateToken = (req, res, next) => {
 // console.log('1.inside generate token');
  const promise = new Promise((resolve, reject) => {
    passport.authenticate('google', (err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    })(req, res, next);
  });
  return promise;
};

module.exports = {
  generateToken,
};
