
const passport = require('passport');
const loginservice = require('./login.service');

const redirectGoogle = (req, res, next) => {
  // this function called by google callback to verify code
  //  console.log('1.inside redirect');
  const promise = new Promise((resolve, reject) => {
    passport.authenticate('google', (err, token) => {
      // console.log('token',token);
      //  console.log('8.token is called ', token);
      if (err) {
        //  console.log('err is ', err);
        reject(err);
      }
      resolve(token);
    })(req, res, next);
  });
  return promise;
};

function getUser(userinfo, done) {
  //  console.log('3.inside get user');
  loginservice.updateUser(userinfo, done);
}

module.exports = {
  getUser,
  redirectGoogle,
};
