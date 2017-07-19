const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const oauthconfig=require('./config');

module.exports=(passport)=>{
passport.use(new GoogleStrategy({
    clientID: oauthconfig.clientID,
    clientSecret: oauthconfig.clientSecret,
    callbackURL: oauthconfig.callbackURL ,
    scope: oauthconfig.scope
  },
  function(accessToken, refreshToken, profile, done) {
    profile.accessToken = accessToken;
    console.log('token is',accessToken);
    return done(null, profile);
  }
));
}