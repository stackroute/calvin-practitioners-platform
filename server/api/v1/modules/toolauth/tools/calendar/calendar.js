const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const toolConfig=require('./config');

module.exports=(passport)=>{
passport.use('google-calendar', new GoogleStrategy({
    clientID: toolConfig.clientID,
    clientSecret: toolConfig.clientSecret,
    callbackURL: toolConfig.callbackURL,
    scope: toolConfig.scope
  },
  function(accessToken, refreshToken, profile, done) {
    profile.accessToken = accessToken;
    // console.log('token is',accessToken);
    return done(null, profile);
  }
));
}
