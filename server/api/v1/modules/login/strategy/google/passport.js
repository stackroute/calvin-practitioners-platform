const GoogleStretegy = require('passport-google-oauth').OAuth2Strategy;
const configAuth = require('./oauthconfig');
const dbcontrol = require('../../../login/login.controller');

module.exports = (passport) => {
  passport.use(new GoogleStretegy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
  },

  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      const time = new Date();
      const namees = profile.displayName;
      const params = {
        email: profile.emails[0].value,
        image: profile.photos[0].value,
        name: namees,
        role: 'consumer',
        // comms:comm,
        // comm:[{
        //       'groupname':'cdonealvin',
        //       'role': 'user',
        //       'type': 'true'
        // }],
        lastlogin: time,
        uh: namees + 123,
      };
      // console.log('2.inside passport');
      dbcontrol.getUser(params, (err, results) => {
        // console.log('inside db token', results);
        if (err) {
          // console.log(err);
          return err;
        }
        return done(results);
      });
    });
  }));
};
