const GoogleStretegy = require('passport-google-oauth').OAuth2Strategy;
const configAuth = require('./oauthconfig');
const dbcontrol = require('../../../users/users.controller');

module.exports = (passport) => {
  // this function gets the access token from google by providing code, clientID,
  // clientSecret
  passport.use(new GoogleStretegy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
  },

  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      console.log('inside passport');
      const time = new Date();
      const namees = profile.displayName;
      const params = {
        username: profile.emails[0].value,
        image: profile.photos[0].value,
        name: namees,
        role: 'consumer',
        lastlogin: time,
        uh: namees + 123,
      };
      // console.log('2.inside passport');

      // calling getUser function to Update or insert profile in database
      dbcontrol.getUser(params, (err, results) => {
        console.log('inside db token', results);

        if (err) {
          //  console.log('err is :',err);
          return err;
        }
        return done(null, results);
      });
    });
  }));
};
