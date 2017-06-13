const GoogleStretegy = require('passport-google-oauth').OAuth2Strategy;
const configAuth = require('./auth');
const cassandra = require('cassandra-driver');
const jwt = require('jsonwebtoken');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'calvinusers' });
module.exports = function (passport) {
  passport.use(new GoogleStretegy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
  }, (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      console.log('inside pasport');
      const params = {
        email: profile.emails[0].value,
        id: profile.id,
        token: accessToken,
        image: profile.photos[0].value,
      };
      const userDetails = {
        username: profile.displayName,
        email: profile.emails[0].value,
      };
      const userToken = jwt.sign(userDetails, 'secret key', { expiresIn: 60 * 30 });
      client.execute('select * from sampleuser where email=:email', params, (err, result) => {
        if (err) {
          done(err);
        } else {
          const x = result.rows;
          if (!Array.isArray(x) || !x.length) {
        // array does not exist, is not an array, or is empty
            console.log('empty array');
            client.execute('INSERT into sampleuser(email,profilepic) VALUES(:email,:image)', params, (error, res) => {
              if (error) {
                return error;
              }
              console.log('result is updated', res);
              return done(null, userToken);
            });
          } else {
            console.log(result.rows);
            return done(null, result);
          }
        }
      });
    });
  },
    ));
};
