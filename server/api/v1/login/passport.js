const GoogleStretegy = require('passport-google-oauth').OAuth2Strategy;
const configAuth = require('./oauthconfig');
// const userdata = require('../database/dbconfig');
const cassandra = require('cassandra-driver');
const jwt = require('jsonwebtoken');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'calvin' });
module.exports = (passport) => {
  passport.use(new GoogleStretegy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
  }, (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      // console.log('inside pasport', profile.displayName);
      const time = new Date();

      const params = {
        email: profile.emails[0].value,
        id: profile.id,
        // token: accessToken,
        image: profile.photos[0].value,
        name: profile.displayName,
        role: 'consumer',
        // comm:{
        //       'groupname':'cdonealvin',
        //       'role': 'user',
        //       'type': 'true'
        // },

        lastlogin: time,
        uh: `${profile.displayName}123`,
      };
      const userDetails = {
        username: profile.displayName,
        email: profile.emails[0].value,
      };
      const userToken = jwt.sign(userDetails, 'secret key', { expiresIn: 60 * 30 });
      client.execute('select * from users where email=:email', params, (err, result) => {
        if (err) {
          return done(err);
        }
        const x = result.rows;
        if (!Array.isArray(x) || !x.length) {
        // array does not exist, is not an array, or is empty
          // console.log('empty array');
          // console.log('username', profile.displayName);
          client.execute('INSERT into users(email,lastlogin,role) VALUES(:email,:lastlogin,:role)', params, (error) => {
            if (error) {
              return error;
            }
            // console.log('result is updated', res);
            return done(null, userToken);
          });
        }
          // console.log(result.rows);
        return done(null, userToken);
      });
    });
  }));
};
