
const passport = require('passport');
const loginservice = require('./login.service');

const redirectGoogle = (req, res, next) => {
  // this function called by google callback to verify code
  const promise = new Promise((resolve, reject) => {
    passport.authenticate('google', (err, token) => {
      // console.log('token', token);
      if (err) {
        reject(err);
      }
      resolve(token);
    })(req, res, next);
  });
  return promise;
};


function getUserCommunities(email) {

        // loginservice
}


// function getUser(userinfo, done) {
//   console.log('3.inside get user');
//   loginservice.updateUser(userinfo, done);
// }

module.exports = {
  redirectGoogle,
};
