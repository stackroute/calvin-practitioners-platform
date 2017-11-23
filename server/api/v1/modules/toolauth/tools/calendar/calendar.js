const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const toolConfig = require('./config');
const toolauthservice = require('../../toolauth.service');
module.exports = (passport) => {
  passport.use('google-calendar', new GoogleStrategy({
    clientID: toolConfig.clientID,
    clientSecret: toolConfig.clientSecret,
    callbackURL: toolConfig.callbackURL,
    scope: toolConfig.scope
  },
    function (accessToken, refreshToken, profile, done) {
      profile.accessToken = accessToken;
      console.log('token is', accessToken);
      
      const toolinfo={
        toolid:'calendar',
        tokenval:accessToken,
        username: profile.emails[0].value,
        updatedon: new Date()
      };
      // const data=profile;
      toolauthservice.postAppIntegrationToken('calendar', toolinfo, (err, result) => {

        if (err) {
          return done(err, 'unable to post info in DB');
        }
        return done(null, profile);
      });
    }
  ));
}