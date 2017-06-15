
// function loginGoogle(req, res) {
//   passport.authenticate('google', { scope: ['profile', 'email'] });
//     //   res.send("hi google method called");
// }

// const getData = (req, res, next) => {
//   generateToken(req, res, next).then((result) => {
//     console.log('request is ===============', result);
//     res.cookie('currentUser', result);
//     res.redirect('/home');
//   }, (err) => {
//     console.log('error is', err);
//   });
// };
const passport = require('passport');

const generateToken = (req, res, next) => {
  const promise = new Promise((resolve, reject) => {
    passport.authenticate('google', (err, user) => {
      if (err) {
        reject(err);
      } else {
        // console.log('inside Google callback');
        // console.log(user);
        resolve(user);
      }
    })(req, res, next);
  });
  return promise;
};

module.exports =
{
//   loginGoogle,
//   getData,
  generateToken,
};
